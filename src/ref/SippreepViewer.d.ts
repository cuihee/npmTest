/// <reference path="Sippreep.d.ts" />
/// <reference path="Sippreep.Extensions.AttachedBox.d.ts" />
/// <reference path="Sippreep.Extensions.BoxSelector.d.ts" />
/// <reference path="Sippreep.Extensions.DatGUI.d.ts" />
/// <reference path="Sippreep.Extensions.EEPTools.d.ts" />
/// <reference path="Sippreep.Extensions.EnvironmentAdjust.d.ts" />
/// <reference path="Sippreep.Extensions.ExtensionManager.d.ts" />
/// <reference path="Sippreep.Extensions.ExtensionManagerGUI.d.ts" />
/// <reference path="Sippreep.Extensions.FlickerMan.d.ts" />
/// <reference path="Sippreep.Extensions.LineMan.d.ts" />
/// <reference path="Sippreep.Extensions.LoadProgress.d.ts" />
/// <reference path="Sippreep.Extensions.Markup.d.ts" />
/// <reference path="Sippreep.Extensions.Measures.d.ts" />
/// <reference path="Sippreep.Extensions.ModelFilter.d.ts" />
/// <reference path="Sippreep.Extensions.ModelMan.d.ts" />
/// <reference path="Sippreep.Extensions.ModelTreeBrowser2.d.ts" />
/// <reference path="Sippreep.Extensions.PerformanceMonitor.d.ts" />
/// <reference path="Sippreep.Extensions.PickPlane.d.ts" />
/// <reference path="Sippreep.Extensions.PickPoint.d.ts" />
/// <reference path="Sippreep.Extensions.RectSelector.d.ts" />
/// <reference path="Sippreep.Extensions.Sections.d.ts" />
/// <reference path="Sippreep.Extensions.Sheet.d.ts" />
/// <reference path="Sippreep.Extensions.TidbLoader.d.ts" />
/// <reference path="Sippreep.Extensions.Tool2.d.ts" />
/// <reference path="Sippreep.Extensions.ViewpointAnimation.d.ts" />



declare namespace SippreepViewer {
    function CreateViewer(container: HTMLElement): Promise<Sippreep.Viewing.Viewer3D>;
}
// declare module "sippreepviewer" {
//     export =SippreepViewer;
// }
// declare module "sippreep" {
//     export =Sippreep;
// }