export default (object, title = 'No Name', x = 0, y = 0) => {
  const width: number = 210
  const height: number = 300
  const bounds: Bounds = [x, y, width, height]
  const existingPanel = $.global.extendScriptPanel
  if ($.global.isValid(existingPanel)) {
    for (var i = existingPanel.children.length - 1; i >= 0; i--) {
      existingPanel.remove(i)
    }
    return existingPanel
  }
  const panel = (object instanceof Panel) ? object : new Window('palette', title, bounds, {
    resizeable: true,
    borderless: true,
    independent: false
  })
  $.global.extendScriptPanel = panel
  return panel
}
