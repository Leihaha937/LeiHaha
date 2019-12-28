/*
 * @Author: LeiHaha 
 * @Date: 2019-12-25 09:29:00 
 * @Last Modified by: LeiHaha
 * @Last Modified time: 2019-12-27 09:38:29
 */
import axios from '@/utils/axios';
/**
 * 通过ID删除城市信息
 * @param {Object} param {id:''}      //运用该方法需要参数id
 */
export function deleteCityById(param){          
  return axios.post('/City/deleteById',{params: param});
}
/**
 * 查找所有城市信息
 */
export function findAllCity(){
  return axios.get('/City/findAll');
}
/**
 * 通过id查找城市
 * @param {Object} param{id:''} 
 */
export function findCityById(param){
  return axios.get('/City/findById',{params: param});
}
/**
 * 通过省份查找城市
 * @param {Object} param{province:''} 
 */
export function findCityByProvinceId(param){
  return axios.get('/City/findByProvinceId',{params: param});
}
/**
 * 通过新增或修改城市信息
 * @param {Object} param
 */
export function saveCityOrUpdate(param){
  return axios.post('/City/saveOrUpdate',param);
}
