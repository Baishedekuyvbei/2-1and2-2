/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: 白金鑫
 * @Date: 2020-09-09 19:41:40
 * @LastEditors: 白金鑫
 * @LastEditTime: 2020-09-09 20:05:55
 */
import Mock from 'mockjs'

let num=1
let id = 1
let nfc = 1
Mock.mock('/api/list',{
    'list|3':[{
        name:'@cname(2,3)',
        flag:false,
        num:num,
        'child|3':[{
            'title':'@ctitle(4,6)',
            show:false,
            id:id,
            'children|3':[{
                name:'@cname(3)',
                nfc:nfc
            }]
        }]
    }]
})