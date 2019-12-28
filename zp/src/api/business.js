/*
 * @Author: LeiHaha 
 * 商家API
 * @Date: 2019-12-25 09:03:27 
 * @Last Modified by: LeiHaha
 * @Last Modified time: 2019-12-27 10:57:14
 */
import axios from '@/utils/axios';
/**
 * 通过ID删除商家信息
 * @param {Object} param {id:''}      //运用该方法需要参数id
 */
export function deleteBusinessById(param){          
    return axios.post('/Business/deleteById',param);
}
/**
 * 查找所有商家信息
 */
export function findAllBusiness(){
    return axios.get('/Business/findAll');
}
/**
 * 通过城市查找商家
 * @param {Object} param{city:''} 
 */
export function findBusinessByCity(param){
    return axios.get('/Business/findByCity',{params:param});
}
/**
 * 通过id查找商家
 * @param {Object} param{id:''} 
 */
export function findBusinessById(param){
    return axios.get('/Business/findById',{params: param});
}
/**
 * 通过行业类型查找商家
 * @param {Object} param{industry:''} 
 */
export function findBusinessByIndustry(param){
    return axios.get('/Business/findByIndustry',{params: param});
}
/**
 * 通过位置查找商家
 * @param {Object} param{location:''} 
 */
export function findBusinessByLocation(param){
    return axios.get('/Business/findByLocation',{params: param});
}
/**
 * 通过省份查找商家
 * @param {Object} param{province:''} 
 */
export function findBusinessByProvince(param){
    return axios.get('/Business/findByProvince',{params: param});
}
/**
 * 通过规模查找商家
 * @param {Object} param{scale:''} 
 */
export function findBusinessByScale(param){
    return axios.get('/Business/findByScale',{params: param});
}
/**
 * 通过新增或修改商家信息
 * @param {Object} param{province:''} 
 */
export function saveOrUpdateBusiness(param){
    return axios.post('/Business/saveOrUpdate',param);
}

