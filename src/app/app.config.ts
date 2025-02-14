import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom,APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideNzIcons } from 'ng-zorro-antd/icon';
import { BarChartOutline, CommentOutline, UsergroupDeleteOutline } from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { ThemeService } from './service/theme.service';

const icons: IconDefinition[] = [BarChartOutline,CommentOutline,UsergroupDeleteOutline]

export function loadTheme(themeService:ThemeService):Function{
  return ()=>{
    return themeService.change()
  }
}

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideNzI18n(en_US),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideNzIcons(icons),
    {
      provide:APP_INITIALIZER,
      useFactory:loadTheme,
      deps:[ThemeService],
      multi:true
    }
  ]
};
