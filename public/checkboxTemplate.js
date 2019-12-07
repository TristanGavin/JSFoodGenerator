(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['checkbox'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "   <form id=\""
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":3,"column":13},"end":{"line":3,"column":25}}}) : helper)))
    + "\" name=\"form\" method=\"post\" action=\"CheckBox.jsp\">\r\n      <div>\r\n         <legend>"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":5,"column":17},"end":{"line":5,"column":29}}}) : helper)))
    + "</legend>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":9},"end":{"line":11,"column":18}}})) != null ? stack1 : "")
    + "   </form>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "         <div>\r\n            <input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = helpers.ingredient || (depth0 != null ? depth0.ingredient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredient","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":56}}}) : helper)))
    + "\">\r\n            <label for=\"filter-condition-good\">"
    + alias4(((helper = (helper = helpers.ingredient || (depth0 != null ? depth0.ingredient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredient","hash":{},"data":data,"loc":{"start":{"line":9,"column":47},"end":{"line":9,"column":61}}}) : helper)))
    + "</label>\r\n         </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"filter-input-container\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categoryData : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":3},"end":{"line":13,"column":12}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();