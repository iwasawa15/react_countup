import React, { FC, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Spinner } from 'react-bootstrap'

const ENDPOINT = 'https://api.exchangeratesapi.io/latest'

interface Response{
  'base': string,
  'date': string,
  'rates': {
    [key: string]: number
  }
}

const getAPI = (): Promise<number | string> => {
  return axios.get(
    ENDPOINT,
    {
      params: {
        base: 'USD'
      }
    }
  ).then((res: AxiosResponse<Response>) => {
    const result: number = res.data.rates.JPY;
    return result;
  })
  .catch((error) => {
    console.log(error);
    return 'error';
  })
}

type HungryState = 'loading' | 'complete'

enum RequestState {
  loading, // 0
  complete, // 1
}
type ExchangeRate = null | number | string

type Props = {
  state: RequestState,
}

const Loading = () => (
  <Spinner animation="border" role="status">
    <span className="sr-only">Loading...</span>
  </Spinner>
)
  
interface State {
  requestState: RequestState,
  data: ExchangeRate,
}

const Hungry = () => {
  const initialState = {
    requestState: RequestState.loading,
    data: null,
  }
  const [state, setState] = useState<State>(initialState);

  // // ComponentWillMount
  // useEffect(() => {
  //   console.log('will');
  //   getAPI().then((value) => {
  //     console.log('then');
  //     setData(value)
  //     setInterval(() => {setState('complete')}, 5000)
  //   })
  // })

  // ComponentDidMount
  useEffect(() => {
    console.log('did');
    getAPI().then((value) => {
      // setData(value)
      // setInterval(() => {setState('complete')}, 5000)
      setState({...state, ...{ data: value, requestState: RequestState.complete }});
    })
  }, [])

  console.log('render');
  return(
    <div>
      お腹すいたー
      { state.requestState === RequestState.loading ? (<Loading />) : (<p>{state.data}</p>) }
    </div>
  )
 }

export default Hungry;