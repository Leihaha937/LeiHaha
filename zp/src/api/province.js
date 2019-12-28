/*
 * @Author: LeiHaha 
 * @Date: 2019-12-25 09:34:38 
 * @Last Modified by: LeiHaha
 * @Last Modified time: 2019-12-26 14:44:11
 */
import axios from '@/utils/axios';
/**
 * 通过ID删除省份信息
 * @param {Object} param {id:''}      //运用该方法需要参数id
 */
export function deleteProvinceById(param){          
  return axios.post('/Province/deleteById',param);
}
/**
 * 查找所有省份信息
 */
export function findAllProvince(){
  return axios.get('/Province/findAll');
}
/**
 * 通过id查找省份
 * @param {Object} param{id:''} 
 */
export function findProvinceById(param){
  return axios.get('/Province/findById',{params: param});
}
/**
 * 通过新增或修改省份信息
 * @param {Object} param
 */
export function saveProvinceOrUpdate(param){
  return axios.post('/Province/saveOrUpdate',param);
}
