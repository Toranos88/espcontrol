// Garage door card: cover toggle with live state label and open/closed icons.
registerButtonType("garage", {
  label: "Garage Door",
  allowInSubpage: true,
  hideLabel: true,
  onSelect: function (b) {
    b.label = "";
    b.sensor = "";
    b.unit = "";
    b.precision = "";
    b.icon = "Garage";
    b.icon_on = "Garage Open";
  },
  renderSettings: function (panel, b, slot, helpers) {
    var displayMode = b.sensor === "label" ? "label" : "state";

    function iconField(label, inputSuffix, field, currentVal, defaultVal) {
      var section = document.createElement("div");
      section.className = "sp-field";
      section.appendChild(helpers.fieldLabel(label, helpers.idPrefix + inputSuffix));
      var picker = document.createElement("div");
      picker.className = "sp-icon-picker";
      picker.id = helpers.idPrefix + inputSuffix + "-picker";
      picker.innerHTML =
        '<span class="sp-icon-picker-preview mdi mdi-' + iconSlug(currentVal) + '"></span>' +
        '<input class="sp-icon-picker-input" id="' + helpers.idPrefix + inputSuffix + '" type="text" ' +
        'placeholder="Search icons\u2026" value="' + escAttr(currentVal) + '" autocomplete="off">' +
        '<div class="sp-icon-dropdown"></div>';
      section.appendChild(picker);
      initIconPicker(picker, currentVal, function (opt) {
        b[field] = opt || defaultVal;
        helpers.saveField(field, b[field]);
      });
      return section;
    }

    var ef = document.createElement("div");
    ef.className = "sp-field";
    ef.appendChild(helpers.fieldLabel("Entity ID", helpers.idPrefix + "entity"));
    var entityInp = helpers.textInput(helpers.idPrefix + "entity", b.entity, "e.g. cover.garage_door");
    ef.appendChild(entityInp);
    panel.appendChild(ef);
    helpers.bindField(entityInp, "entity", true);

    var closedIconVal = b.icon && b.icon !== "Auto" ? b.icon : "Garage";
    var iconOnVal = b.icon_on && b.icon_on !== "Auto" ? b.icon_on : "Garage Open";
    panel.appendChild(iconField("Closed Icon", "icon", "icon", closedIconVal, "Garage"));
    panel.appendChild(iconField("Open Icon", "icon-on", "icon_on", iconOnVal, "Garage Open"));

    var displayField = document.createElement("div");
    displayField.className = "sp-field";
    displayField.appendChild(helpers.fieldLabel("Display"));
    var displaySeg = document.createElement("div");
    displaySeg.className = "sp-segment";
    var labelBtn = document.createElement("button");
    labelBtn.type = "button";
    labelBtn.textContent = "Label";
    var stateBtn = document.createElement("button");
    stateBtn.type = "button";
    stateBtn.textContent = "State";
    displaySeg.appendChild(labelBtn);
    displaySeg.appendChild(stateBtn);
    displayField.appendChild(displaySeg);
    panel.appendChild(displayField);

    var labelSection = condField();
    var lf = document.createElement("div");
    lf.className = "sp-field";
    lf.appendChild(helpers.fieldLabel("Label", helpers.idPrefix + "label"));
    var labelInp = helpers.textInput(helpers.idPrefix + "label", b.label, "e.g. Garage Door");
    lf.appendChild(labelInp);
    labelSection.appendChild(lf);
    helpers.bindField(labelInp, "label", true);
    panel.appendChild(labelSection);

    function setDisplayMode(mode, persist) {
      displayMode = mode;
      labelBtn.classList.toggle("active", mode === "label");
      stateBtn.classList.toggle("active", mode === "state");
      labelSection.classList.toggle("sp-visible", mode === "label");
      if (!persist) return;
      b.sensor = mode === "label" ? "label" : "";
      helpers.saveField("sensor", b.sensor);
    }

    labelBtn.addEventListener("click", function () { setDisplayMode("label", true); });
    stateBtn.addEventListener("click", function () { setDisplayMode("state", true); });
    setDisplayMode(displayMode, false);
  },
  renderPreview: function (b, helpers) {
    var iconName = b.icon && b.icon !== "Auto" ? iconSlug(b.icon) : "garage";
    var label = b.sensor === "label" ? (b.label || b.entity || "Garage Door") : "Closed";
    return {
      iconHtml: '<span class="sp-btn-icon mdi mdi-' + iconName + '"></span>',
      labelHtml:
        '<span class="sp-btn-label-row"><span class="sp-btn-label">' + helpers.escHtml(label) + '</span>' +
        '<span class="sp-type-badge mdi mdi-garage"></span></span>',
    };
  },
});
