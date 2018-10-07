/**
 * @file
 * Copyright 2018 Jike Inc. All rights Reserved.
 * -------------------------------------------------------------------
 * Modification history
 * -------------------------------------------------------------------
 * @author  Created on 2018/09/22, by Xu Fuping <18875142455@163.com>
 *
 */
import {Message} from 'element-ui';
// icode Camel转化
const elementMessage = Message;
export default {
    openMessage: (msg, type) => {
        elementMessage({
            message: msg,
            type: type
        });
    }
};
