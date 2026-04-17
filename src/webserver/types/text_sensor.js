// Read-only text sensor card: displays a HA state string in the label area.
registerButtonType("text_sensor", {
  label: "Text Sensor",
  allowInSubpage: true,
  hideLabel: true,
  onSelect: function (b) {
    b.entity = "";
    b.label = "";
    b.icon_on = "Auto";
    b.unit = "";
    b.precision = "";
    if (!b.icon) b.icon = "Auto";
  },
  renderSettings: function (panel, b, slot, helpers) {
    var sf = document.createElement("div");
    sf.className = "sp-field";
    sf.appendChild(helpers.fieldLabel("Text Sensor Entity", helpers.idPrefix + "sensor"));
    var sensorInp = helpers.textInput(helpers.idPrefix + "sensor", b.sensor, "e.g. text_sensor.washing_machine_status");
    sf.appendChild(sensorInp);
    panel.appendChild(sf);
    helpers.bindField(sensorInp, "sensor", true);

    panel.appendChild(helpers.makeIconPicker(
      helpers.idPrefix + "icon-picker", helpers.idPrefix + "icon",
      b.icon || "Auto", function (opt) {
        b.icon = opt;
        helpers.saveField("icon", opt);
        renderPreview();
      }
    ));
  },
  renderPreview: function (b, helpers) {
    var text = b.sensor || "Text Sensor";
    var iconName = b.icon && b.icon !== "Auto" ? iconSlug(b.icon) : "cog";
    return {
      iconHtml: '<span class="sp-btn-icon mdi mdi-' + iconName + '"></span>',
      labelHtml:
        '<span class="sp-btn-label-row"><span class="sp-btn-label">' + helpers.escHtml(text) + '</span>' +
        '<span class="sp-type-badge mdi mdi-format-text"></span></span>',
    };
  },
});
