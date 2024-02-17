/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsOfcomponent {
  title: string;
}

class Component<T extends PropsOfcomponent> {
  constructor(public props: T) {}
}

class Page extends Component<PropsOfcomponent> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
