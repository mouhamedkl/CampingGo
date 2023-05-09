import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsComponent } from './components/components/components.component';

import { ChatComponent } from './chat_app/chat/chat.component';
import { MessageComponent } from './chat_app/message/message.component';
import { AllGroupCampingComponent } from './GroupCamping/components/all-group-camping/all-group-camping.component';
import { AddgroupcampingComponent } from './AddGroupCamping/components/addgroupcamping/addgroupcamping.component';
import { MapComponent } from './map/map.component';
import { RechercheGpComponent } from './RechercheGp/components/recherche-gp/recherche-gp.component';

import { DashboardComponent } from './Equipment/dashboard/dashboard.component';
import { TemplateComponent } from './Equipment/template/template.component';
import { PaymentComponent } from './Equipment/payment/payment.component';
import { AuthGuard } from './Equipment/guards/auth.guard';
import { NotfoundComponent } from './Equipment/notfound/notfound.component';
import { LoginComponent } from './Equipment/login/login.component';
import { AjouterComponent } from './Equipment/dashboard/ajouter/ajouter.component';
import { ListeComponent } from './Equipment/dashboard/liste/liste.component';
import { UserGuard } from './Equipment/guards/user.guard';
import { OrdersComponent } from './Equipment/dashboard/orders/orders.component';
import { ListepaymentComponent } from './Equipment/dashboard/listepayment/listepayment.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { ReviewComponent } from './review/review.component';
import { UpdateReviewComponent } from './update-review/update-review.component';

import { AccueilComponent } from './accueil/accueil.component';
import { CommentComponent } from './comment/comment.component';
import { SignupComponent } from './user_module/signup/signup.component';
const routes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{path: 'signup', component: SignupComponent },

{ path: 'home', component: ComponentsComponent },

{ path:'chatroom',component:ChatComponent,canActivate:[UserGuard],children:[
{path:':chatroomId',component:MessageComponent}
]
},
{path:'shop',                    component:TemplateComponent}
,{path:'payment',component:PaymentComponent},
{path:'add',component:DashboardComponent,canActivate:[AuthGuard],children:[
  {path:'ajouter',component:AjouterComponent},
  {path:'liste',component:ListeComponent},
  {path:'orders',component:OrdersComponent},
  {path:'listepayment',component:ListepaymentComponent}
]},
{path: 'comments', component:CommentComponent},

{path: 'accueil', component:AccueilComponent},

{path: 'review', component:ReviewComponent},
{path: 'pop-up/:id', component:ReviewComponent},






{path:'login',component:LoginComponent},
{path:"groupcamping",component:AllGroupCampingComponent},
{path:"AddGroupCamping",component:AddgroupcampingComponent},
{path:"map",component:MapComponent},
{path:"search",component:RechercheGpComponent},
{path:'**',component:NotfoundComponent},

];



@NgModule({
  imports: [CommonModule,BrowserModule,RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule { }
