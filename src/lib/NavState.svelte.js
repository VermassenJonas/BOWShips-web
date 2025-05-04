import FreeboardTab from "../components/FreeboardTab.svelte";
import GunsOverview from "../components/GunsOverview.svelte";
import HullTab from "../components/HullTab.svelte";

export const mainTabs = [
	{
		title: "Hull",
		content: HullTab,
	},
	{
		title: "Freeboard",
		content: FreeboardTab,
	},
	{
		title: "Guns",
		content: [
			GunsOverview
		]
	}
]