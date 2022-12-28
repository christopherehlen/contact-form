import config from '#src/config';
import view from '#generated/view';
import controller from '#generated/controller';
import style from '#generated/styles';
import widget from '#generated/widget';

let organism = {
    config: config,
    view: view,
    controller: controller,
    style: style
};

export { widget, organism }