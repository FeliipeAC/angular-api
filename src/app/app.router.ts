import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';

export const routes = [
    {
        path: 'login',
        component: LoginComponent
    },
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
