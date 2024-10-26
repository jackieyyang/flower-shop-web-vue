import Mock from 'mockjs'

// 用户相关接口
Mock.mock('/api/user/login', 'post', {
  code: 0,
  message: '登录成功',
  data: {
    token: '@guid',
    userInfo: {
      id: '@id',
      name: '@cname',
      avatar: '@image("100x100")',
      'role|1': ['admin', 'user'],
    },
  },
})

Mock.mock('/api/user/info', 'get', {
  code: 0,
  message: '获取成功',
  data: {
    id: '@id',
    name: '@cname',
    email: '@email',
    phone: /^1[3-9]\d{9}$/,
    avatar: '@image("100x100")',
    'role|1': ['admin', 'user'],
    'permissions|3-5': ['@word'],
  },
})
