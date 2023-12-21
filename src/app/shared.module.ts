import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ClarityModule, ClrIconModule, ClrModalModule, ClrVerticalNavModule } from '@clr/angular';
import { HomeComponent } from "./components/home/home.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";
import { MainNavComponent } from "./shared/components/nav-bar/main-nav.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { RouterLinkMatchDirective } from "./shared/directives/router-link-match.directive";

@NgModule({
  exports: [
    MainNavComponent,
    HomeComponent,
    RouterLinkMatchDirective,
    CommonModule,
    ClarityModule,
    ClrModalModule,
    ClrIconModule,
    ClrVerticalNavModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    LoaderComponent,
    NotFoundComponent
  ],
  declarations: [
    MainNavComponent,
    HomeComponent,
    RouterLinkMatchDirective,
    LoaderComponent,
    NotFoundComponent
  ],
  providers: [],
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    ClarityModule,
    ClrModalModule,
    ClrIconModule,
    ClrVerticalNavModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}
