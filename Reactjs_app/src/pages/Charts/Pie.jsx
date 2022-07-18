import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, PieSeries } from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const { currentMode } = useStateContext();  

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pie" title="Inflation Rate in circle" />
      <ChartComponent id="pie-chart" height="420px" chartArea={{ border: { width: 0 }}} tooltip={{ enable: true }} background={ currentMode === 'Dark' ? '#33373E' : '#fff'}>
        <Inject services={[DateTime, Legend, PieSeries]} />
        <SeriesCollectionDirective>
          {pieChartData.map((item, index) => <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Pie