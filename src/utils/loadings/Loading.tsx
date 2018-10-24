import * as React from "react";
import * as Loadable from "react-loadable";

export default class Loading extends React.Component<Loadable.LoadingComponentProps>
{
	render()
	{
		return <div>Loading...</div>;
	}
}