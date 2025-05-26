import { Routes } from '@angular/router';
import { InputPropParentComponent } from './1-input-properties/input-prop-parent/input-prop-parent.component';
import { NgModelParentComponent } from './2-ng-model/ng-model-parent/ng-model-parent.component';
import { VCParentComponent } from './3-view-child/v-c-parent/v-c-parent.component';
import { SharedServiceParentComponent } from './4-using-shared-service/shared-service-parent/shared-service-parent.component';
import { CPParentComponent } from './5-content-projection/c-p-parent/c-p-parent.component';

export const routes: Routes = [
    {
        path: 'input-properties',
        component: InputPropParentComponent
    },
    {
        path: 'ng-model',
        component: NgModelParentComponent
    },
    {
        path: 'view-child',
        component: VCParentComponent
    },
    {
        path: 'using-shared-service',
        component: SharedServiceParentComponent
    },
    {
        path: 'content-projection',
        component: CPParentComponent
    }
];
