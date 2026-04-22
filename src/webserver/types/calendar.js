// Read-only date card: displays the current day number with the month label.
registerButtonType("calendar", {
  label: "Date",
  allowInSubpage: true,
  hideLabel: true,
  onSelect: function (b) {
    b.entity = "";
    b.label = "";
    b.icon = "Auto";
    b.icon_on = "Auto";
    b.sensor = "";
    b.unit = "";
    b.precision = "";
  },
  renderSettings: function () {},
  renderPreview: function (b, helpers) {
    var now = new Date();
    var day = String(now.getDate());
    var month = now.toLocaleString("en", { month: "long" });
    return {
      iconHtml:
        '<span class="sp-sensor-preview">' +
          '<span class="sp-sensor-value">' + day + '</span>' +
        '</span>',
      labelHtml:
        '<span class="sp-btn-label-row"><span class="sp-btn-label">' + helpers.escHtml(month) + '</span>' +
        '<span class="sp-type-badge mdi mdi-calendar-month"></span></span>',
    };
  },
});
