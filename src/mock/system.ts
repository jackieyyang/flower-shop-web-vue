import Mock from 'mockjs'

// 系统相关接口
Mock.mock('/api/system/menu', 'get', {
  code: 0,
  message: '获取成功',
  data: {
    'list|10': [{
      id: '@id',
      title: '@ctitle(4, 8)',
      'type|1': ['menu', 'button'],
      createTime: '@datetime'
    }]
  }
})
