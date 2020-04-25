import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { copyWorkcomponent } from './app.component';

describe('copyWorkcomponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        copyWorkcomponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(copyWorkcomponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'copywork-app'`, () => {
    const fixture = TestBed.createComponent(copyWorkcomponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('copywork-app');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(copyWorkcomponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('copywork-app app is running!');
  });
});
