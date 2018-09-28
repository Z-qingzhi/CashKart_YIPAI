// export default (name) => () => import('@/views/'+name+'.vue')

function getViews(path) {
  return resolve => {
    require.ensure([], (require) => {
      resolve(require('@/views/' + path + '.vue'))
    })
  }
}

export default getViews;