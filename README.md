# NgCatalyst Visualizations Example App
>App with examples of all the data visualizations available in the [ngCatalyst](https://github.com/EikosPartners/ngCatalyst) package.

### Setup

Clone this repo then run `npm install`. 

Next run `ng serve` and explore the different visualizations available in NgCatalyst. 

Go to [http://localhost:4200](http://localhost:4200) after running the project to see all the visualizations.

You can also experiment with each chart by changing their props in the `app.component.ts` file.

### Testing changes to the *ngCatalyst* components locally

#### Inside *ngcatalyst-examples* project

1. Append the following line inside *tsconfig.json*
```json
"paths": { "@angular/*": ["node_modules/@angular/*"] }
```
2.  Replace the module import inside *app.module.ts*
```typescript
import { NgcatalystModule } from "ngcatalyst";
```
*becomes*
```typescript
import { NgcatalystModule } from  "../../node_modules/ngcatalyst/dist/ngcatalyst/bundles/ngcatalyst.umd.js";
```
3. Replace the style reference inside *angular.json* file
```json
"node_modules/ngcatalyst/lib/styles.css"
```
*becomes*
```json
"node_modules/ngcatalyst/dist/ngcatalyst/lib/styles.css"
```

#### Inside *agVisuals* directory
4. In terminal enter
```npm run package```
5. In terminal enter
```npm link```

#### Inside *ngcatalyst-examples* directory
6. In terminal enter
```npm link ngcatalyst```
7. In terminal enter
```npm start```