import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Directive({
  selector: '[appRouterLinkMatch]'
})
export class RouterLinkMatchDirective implements OnInit {
  private routes: string [];

  constructor(private el: ElementRef, private renderer: Renderer2, private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  @Input() set match(routes: string[]) {
    this.routes = routes;
  }

  ngOnInit(): void {
    this.checkRoutes(window.location.pathname);
    this.router.events.subscribe((val: any) => {
      if (!val.url) {
        return;
      }
      if (val instanceof NavigationEnd) {
        const url = (val as NavigationEnd).urlAfterRedirects;
        this.checkRoutes(url);
      }
    });

  }

  private checkRoutes(url: string): void {
    if (!this.routes || this.routes.length === 0) {
      return;
    }

    setTimeout(() => {
      let found = false;
      this.routes.forEach(route => {

        if (route.endsWith('*')) {
          const match = route.replace('*', '');
          if (url.includes(match)) {
            found = true;
          }

          return;
        }

        if (route === url) {
          found = true;
        }
      });

      if (found) {
        this.renderer.addClass(this.el.nativeElement, 'active');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'active');
      }
    });
  }
}
