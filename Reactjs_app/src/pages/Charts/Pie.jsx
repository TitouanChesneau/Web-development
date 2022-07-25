import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationTooltip, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();  

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Inflation Rate in circle" />
      <AccumulationChartComponent id="charts" height="420px" background={ currentMode === 'Dark' ? '#33373E' : '#fff'} legendSettings={{ background: (currentMode === 'Dark') ? '#0f6d72' : '#fff' }}>
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' radius='94%' innerRadius='20%' dataLabel={{ visible: true, position: 'Outside', name: 'x' }} />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pie