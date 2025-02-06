import React, { Component } from 'react';
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import Navbar from './navbar';
import Footer from './footer';
import { connect } from 'react-redux';



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        name: "Users",
        data: [10, 20, 35, 3, 50]
      }],
      options: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Theme1', 'Theme2', 'Theme3', 'Theme4', 'Theme5'],
        }

      },

    };

  }

  componentDidMount() {
    this.updateChartTheme();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isDarkmode !== this.props.isDarkmode) {
      this.updateChartTheme();
    }
  }

  updateChartTheme() {
    const { isDarkmode } = this.props;
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        theme: {
          mode: isDarkmode ? 'dark' : 'light',
          palette: {
            theme: isDarkmode ? 'palette2' : 'palette1',
          },
        },
      },
    }));
  }

  render() {
    const { isDarkmode } = this.props;
    console.log(isDarkmode);
    return (
      <div>
        <>
          <Navbar />
          <div className={`${isDarkmode ? 'dark' : ''} `}>


            <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full dark:bg-mine bg-white ">
              <div className=" rounded-xl m-2  lg:w-[calc(40%-4px)] sm:w-full h-[506px] dark:bg-m2 bg-blue-100">
                <div className="bg-transparent dark:bg-gray-900  shadow-lg rounded-lg m-9 space-y-4">
                  <div className="flex items-center p-4 space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-white text-sm">Total Subscribers</div>
                      <div className="text-gray-900 dark:text-purple-900 text-2xl font-semibold">
                        71,897
                        <span className="text-green-500 text-sm font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          122
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent dark:bg-gray-900  shadow-lg rounded-lg m-9 space-y-4">
                  <div className="flex items-center p-4 space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-white text-sm">Total Subscribers</div>
                      <div className="text-gray-900 dark:text-purple-900 text-2xl font-semibold">
                        71,897
                        <span className="text-green-500 text-sm font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          122
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent dark:bg-gray-900  shadow-lg rounded-lg m-9 space-y-4">
                  <div className="flex items-center p-4 space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-white text-sm">Total Subscribers</div>
                      <div className="text-gray-900 dark:text-purple-900 text-2xl font-semibold">
                        71,897
                        <span className="text-green-500 text-sm font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          122
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:w-full m-2 sm:w-full sm: h-[506px] h-[506px]  bg-blue-100 dark:bg-m2 relative border-solid rounded-xl ">
                <div className="sm:flex-row flex-col ml-[30px] ">
                  <div className=" relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                    <div id="chart">
                      <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="bar"
                        height={450}
                        width={950}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2 lg:flex-row sm:flex-col flex-col w-full  dark:bg-mine bg-white   ">
              <div className=" rounded-xl m-2  lg:w-[calc(63%-4px)] sm:w-full h-[506px] dark:bg-m2 bg-blue-100">
                <div className="bg-transparent dark:bg-gray-900  shadow-lg rounded-lg m-9 space-y-4">
                  <div className="flex items-center p-4 space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-white text-sm">Total Subscribers</div>
                      <div className="text-gray-900 dark:text-purple-900 text-2xl font-semibold">
                        71,897
                        <span className="text-green-500 text-sm font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          122
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent dark:bg-gray-900  shadow-lg rounded-lg m-9 space-y-4">
                  <div className="flex items-center p-4 space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-white text-sm">Total Subscribers</div>
                      <div className="text-gray-900 dark:text-purple-900 text-2xl font-semibold">
                        71,897
                        <span className="text-green-500 text-sm font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          122
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-transparent dark:bg-gray-900  shadow-lg rounded-lg m-9 space-y-4">
                  <div className="flex items-center p-4 space-x-4">
                    <div className="p-2 bg-purple-200 rounded-full">

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a2 2 0 00-2-2h-3v4z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15V7a2 2 0 012-2h10a2 2 0 012 2v8" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15v4a2 2 0 002 2h3v-4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 15h16" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-white text-sm">Total Subscribers</div>
                      <div className="text-gray-900 dark:text-purple-900 text-2xl font-semibold">
                        71,897
                        <span className="text-green-500 text-sm font-medium flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                          122
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:w-full m-2 sm:w-full sm: h-[506px] h-[506px]  bg-blue-100 dark:bg-m2 relative border-solid rounded-xl ">
                <div className="sm:flex-row flex-col ml-[30px] ">
                  <div className=" relative mr-[50px] mt-[40px] w-[200px] sm:w-[280px] ml-[50px] sm:ml-0">
                    <div id="chart">
                      <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="line"
                        height={450}
                        width={830}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </>

        <></>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  isDarkmode: state.isDarkmode,
});
export default connect(mapStateToProps)(Dashboard);
