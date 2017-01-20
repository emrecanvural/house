"use strict";
var game_component_1 = require("./pages/game/game.component");
var about_component_1 = require("./pages/about/about.component");
var level_one_component_1 = require("./pages/level-one/level-one.component");
var level_two_component_1 = require("./pages/level-two/level-two.component");
var level_three_component_1 = require("./pages/level-three/level-three.component");
var high_score_component_1 = require("./pages/high-score/high-score.component");
var add_high_score_component_1 = require("./pages/high-score/add-high-score/add-high-score.component");
exports.routes = [
    { path: '', component: game_component_1.GameComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'level-one', component: level_one_component_1.LevelOneComponent },
    { path: 'level-two', component: level_two_component_1.LevelTwoComponent },
    { path: 'level-three', component: level_three_component_1.LevelThreeComponent },
    { path: 'high-score', component: high_score_component_1.HighScoreComponent },
    { path: 'add-high-score/:level:moves:caller', component: add_high_score_component_1.AddHighScoreComponent }
];
exports.navigatableComponents = [
    game_component_1.GameComponent,
    about_component_1.AboutComponent,
    level_one_component_1.LevelOneComponent,
    level_two_component_1.LevelTwoComponent,
    level_three_component_1.LevelThreeComponent,
    high_score_component_1.HighScoreComponent,
    add_high_score_component_1.AddHighScoreComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsOERBQTBEO0FBQzFELGlFQUE2RDtBQUM3RCw2RUFBd0U7QUFDeEUsNkVBQXdFO0FBQ3hFLG1GQUE4RTtBQUM5RSxnRkFBMkU7QUFDM0UsdUdBQWlHO0FBRXBGLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQztJQUNwQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7SUFDMUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBQztJQUNqRCxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFDO0lBQ2pELEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUM7SUFDckQsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSx5Q0FBa0IsRUFBQztJQUNuRCxFQUFDLElBQUksRUFBRSxvQ0FBb0MsRUFBRSxTQUFTLEVBQUUsZ0RBQXFCLEVBQUM7Q0FDL0UsQ0FBQztBQUVXLFFBQUEscUJBQXFCLEdBQUc7SUFDbkMsOEJBQWE7SUFDYixnQ0FBYztJQUNkLHVDQUFpQjtJQUNqQix1Q0FBaUI7SUFDakIsMkNBQW1CO0lBQ25CLHlDQUFrQjtJQUNsQixnREFBcUI7Q0FDdEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7R2FtZUNvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy9nYW1lL2dhbWUuY29tcG9uZW50JztcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50JztcbmltcG9ydCB7TGV2ZWxPbmVDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvbGV2ZWwtb25lL2xldmVsLW9uZS5jb21wb25lbnQnO1xuaW1wb3J0IHtMZXZlbFR3b0NvbXBvbmVudH0gZnJvbSAnLi9wYWdlcy9sZXZlbC10d28vbGV2ZWwtdHdvLmNvbXBvbmVudCc7XG5pbXBvcnQge0xldmVsVGhyZWVDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvbGV2ZWwtdGhyZWUvbGV2ZWwtdGhyZWUuY29tcG9uZW50JztcbmltcG9ydCB7SGlnaFNjb3JlQ29tcG9uZW50fSBmcm9tICcuL3BhZ2VzL2hpZ2gtc2NvcmUvaGlnaC1zY29yZS5jb21wb25lbnQnO1xuaW1wb3J0IHtBZGRIaWdoU2NvcmVDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvaGlnaC1zY29yZS9hZGQtaGlnaC1zY29yZS9hZGQtaGlnaC1zY29yZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuICB7cGF0aDogJycsIGNvbXBvbmVudDogR2FtZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q29tcG9uZW50fSxcbiAge3BhdGg6ICdsZXZlbC1vbmUnLCBjb21wb25lbnQ6IExldmVsT25lQ29tcG9uZW50fSxcbiAge3BhdGg6ICdsZXZlbC10d28nLCBjb21wb25lbnQ6IExldmVsVHdvQ29tcG9uZW50fSxcbiAge3BhdGg6ICdsZXZlbC10aHJlZScsIGNvbXBvbmVudDogTGV2ZWxUaHJlZUNvbXBvbmVudH0sXG4gIHtwYXRoOiAnaGlnaC1zY29yZScsIGNvbXBvbmVudDogSGlnaFNjb3JlQ29tcG9uZW50fSxcbiAge3BhdGg6ICdhZGQtaGlnaC1zY29yZS86bGV2ZWw6bW92ZXM6Y2FsbGVyJywgY29tcG9uZW50OiBBZGRIaWdoU2NvcmVDb21wb25lbnR9XG5dO1xuXG5leHBvcnQgY29uc3QgbmF2aWdhdGFibGVDb21wb25lbnRzID0gW1xuICBHYW1lQ29tcG9uZW50LFxuICBBYm91dENvbXBvbmVudCxcbiAgTGV2ZWxPbmVDb21wb25lbnQsXG4gIExldmVsVHdvQ29tcG9uZW50LFxuICBMZXZlbFRocmVlQ29tcG9uZW50LFxuICBIaWdoU2NvcmVDb21wb25lbnQsXG4gIEFkZEhpZ2hTY29yZUNvbXBvbmVudFxuXTtcbiJdfQ==