const dishImages = [
 'https://plus.unsplash.com/premium_photo-1695297515151-b2af3a60008d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXRoaW9waWFuJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
  'https://unsplash.com/photos/a-table-topped-with-plates-of-food-and-cups-of-tea-l-V5J8ZTwhs',
  'https://images.unsplash.com/photo-1577223220266-f3edaed48f68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGV0aGlvcGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=700',
  'https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=700',
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=700',
]

export function getDishImage(dish) {
  const imageIndex = Number.parseInt(dish.id.replace('menu-', ''), 10) - 1
  return dish.image || dishImages[imageIndex % dishImages.length]
}
