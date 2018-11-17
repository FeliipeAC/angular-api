import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";
import { PostComponent } from "./components/post/post.component";
import { ModuleWithProviders } from "@angular/compiler/src/core";

export const routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'user/:id',
        component: UserComponent 
    },
    { 
        path: 'post/:id', 
        component: PostComponent 
    },
];

// export const routing:ModuleWithProviders = RouterModule.forRoot(routes);