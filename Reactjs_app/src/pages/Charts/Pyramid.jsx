import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {
  const { currentMode } = useStateContext();  

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Inflation Rate in pyramid" />
      <AccumulationChartComponent id="pyramid-chart" height="420px" background={ currentMode === 'Dark' ? '#33373E' : '#fff'} legendSettings={{ background: (currentMode === 'Dark') ? '#0f6d72' : '#fff' }}>
        <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/>
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid' gapRatio={0.05} />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid