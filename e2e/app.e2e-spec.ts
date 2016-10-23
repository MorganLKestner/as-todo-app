import { A2TodoAppPage } from './app.po';

describe('a2-todo-app App', function() {
  let page: A2TodoAppPage;

  beforeEach(() => {
    page = new A2TodoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
