import { spy } from 'mobx';

function openMobxLogger(config: Array<string>): void {
  spy(event => {
    switch (event.type) {
      case 'action':
        config.includes('action') &&
          console.log(
            `%cACTION name: %c${event.name};%c with args:%c ${JSON.stringify(event.arguments)};`,
            'color:#fcbdbd;',
            'color:#0099ff;',
            'color:#fcbdbd;',
            'color:#0099ff;'
          );
        break;
      case 'compute':
        config.includes('compute') &&
          console.log(
            `%cCOMPUTE name: %c${event.name};%c with object:%c ${JSON.stringify(event.object)};`,
            'color:#fcbdbd;',
            'color:#0099ff;',
            'color:#fcbdbd;',
            'color:#0099ff;'
          );
      default:
        break;
    }
  });
}

export { openMobxLogger };
