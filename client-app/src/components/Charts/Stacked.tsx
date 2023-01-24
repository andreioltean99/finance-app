import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    StackingColumnSeries,
    Tooltip
} from "@syncfusion/ej2-react-charts";
import React from "react";

interface StackedProps {
    width: string;
    height: string;
    stackedPrimaryXAxis: {},
    stackedPrimaryYAxis: {},
    stackedCustomSeries: {}[]
}
const Stacked: React.FC<StackedProps> = ({width, height, stackedPrimaryXAxis, stackedPrimaryYAxis, stackedCustomSeries}) => {
    const currentMode: 'Dark' | 'Light' = 'Light';
    return (
        <ChartComponent
            id="charts"
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            width={width}
            height={height}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={'#fff'}
            legendSettings={{ background: 'white' }}
        >
            <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
            <SeriesCollectionDirective>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
}

export default Stacked;