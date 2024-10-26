// navigation.ts
import type { Router, RouteLocationRaw } from 'vue-router'

export class Navigation {
  private static router: Router

  // Initialize
  static init(router: Router) {
    this.router = router
  }

  // Navigate to a new page
  static async push(to: string | RouteLocationRaw, query?: Record<string, never>) {
    if (typeof to === 'string') {
      await this.router.push({
        path: to,
        query
      })
    } else {
      await this.router.push(to)
    }
  }

  // Replace current page
  static async replace(to: string | RouteLocationRaw, query?: Record<string, never>) {
    if (typeof to === 'string') {
      await this.router.replace({
        path: to,
        query
      })
    } else {
      await this.router.replace(to)
    }
  }

  // Go back to previous page
  static back() {
    this.router.back()
  }

  // Get route parameters
  static getParams(key: string) {
    return this.router.currentRoute.value.params[key]
  }

  // Get query parameters
  static getQuery(key: string) {
    return this.router.currentRoute.value.query[key]
  }

  // Get current route path
  static getCurrentPath() {
    return this.router.currentRoute.value.path
  }

  // Get current full route path (including parameters)
  static getCurrentFullPath() {
    return this.router.currentRoute.value.fullPath
  }
}
