(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['checkbox'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                     <div>\r\n                        <input type=\"checkbox\" value=\""
    + alias4(((helper = (helper = helpers.ingredient || (depth0 != null ? depth0.ingredient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredient","hash":{},"data":data,"loc":{"start":{"line":7,"column":54},"end":{"line":7,"column":68}}}) : helper)))
    + "\">\r\n                        <label for=\"filter-condition-good\">"
    + alias4(((helper = (helper = helpers.ingredient || (depth0 != null ? depth0.ingredient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ingredient","hash":{},"data":data,"loc":{"start":{"line":8,"column":59},"end":{"line":8,"column":73}}}) : helper)))
    + "</label>\r\n                     </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return " <div class=\"filter-input-container\">\r\n               <form id=\""
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":2,"column":25},"end":{"line":2,"column":37}}}) : helper)))
    + "\" name=\"form\" method=\"post\" action=\"CheckBox.jsp\">\r\n                  <div>\r\n                     <legend>"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data,"loc":{"start":{"line":4,"column":29},"end":{"line":4,"column":41}}}) : helper)))
    + "</legend>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.ingredients : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":5,"column":21},"end":{"line":10,"column":30}}})) != null ? stack1 : "")
    + "               </form>\r\n            </div>";
},"useData":true});
})();