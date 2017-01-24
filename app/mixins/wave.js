import Ember from 'ember';

export default Ember.Mixin.create({
  wave: true,
  classNameBindings: ['wave'],
  eventName: 'click',
  init() {
    this._super(...arguments);
    // Map desired event name to invoke function
    let eventName = this.get('eventName');
    this.on(eventName, this, this._wave);
  },
  /**
  Event handler that invokes the link, activating the associated route.

  @method _invoke
  @param {Event} event
  @private
*/
  _wave(event) {
    event.preventDefault();
    let x = event.pageX - this.$(this.element).position().left;//+ this.element.scrollWidth;
    let y = event.pageY - this.$(this.element).position().top;//+ this.element.scrollHeight;

    let radius = 2 * Math.round(Math.sqrt(Math.pow(this.element.offsetWidth, 2) + Math.pow(this.element.offsetHeight, 2)));
    let $css = 'css_' + this.get('elementId');
    let $style = '#' + this.get('elementId') + ':after{display:block;top:' + y + 'px;left:' + x + 'px;width:' + radius + 'px;height:' + radius + 'px;margin-left:' + (-0.5 * radius) + 'px;margin-top:' + (-0.5 * radius) + 'px;';
    if (Ember.$('#' + $css) !== undefined) {
      Ember.$('#' + $css).remove();
    }


    Ember.$("<style />", {
      id: $css,
      type: 'text/css',
      html: $style
    }).appendTo("head");
    window.setTimeout(function () {
      Ember.$('#' + $css).remove();
    }, 2000);


  }

});
