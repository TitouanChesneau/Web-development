import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { barChartData, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
  const { currentMode } = useStateContext();  

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Inflation Rate" />
      <AccumulationChartComponent id="chart" height="420px" primaryXAxis={barPrimaryXAxis} primaryYAxis={barPrimaryYAxis} tooltip={{ enable: true }} background={ currentMode === 'Dark' ? '#33373E' : '#fff'} >
        {/* <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/> */}
        {/* <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={barChartData} xName='x' yName='y' type='Bar' />
        </AccumulationSeriesCollectionDirective> */}
      </AccumulationChartComponent>
    </div>
  )
}

export default Bar