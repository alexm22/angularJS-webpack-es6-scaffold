class appController {
  constructor() {
    this.title = 'Testing angular app';
    this.features = ['ES6', 'Webpack', 'Component based architecture'];
    this.count = 0;
  }

  testClick = () => {
    this.count++;
    console.log(this.count);
  };
}
export { appController };
