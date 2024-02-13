<template>
    <div class="page-home" ref=" canvas">
        <div id="top_bar">
            <div id="status">{{ desktopName }}</div>
            <div id="sendCtrlAltDelButton" @click="sendCtrlAltDel">Send CtrlAltDel</div>
        </div>
        <div id="screen">
        </div>
    </div>
</template>


<script setup name="Vnc001" lang="ts">
import { onMounted } from 'vue';
// ref, reactive, 
import RFB from '@novnc/novnc/core/rfb';
let rfb: any = null;
let desktopName = "192.168.203.147";
//页面加载时
onMounted(() => {
    console.log("vnc001 onMounted()... ");
    connectVnc();
});
let sendCtrlAltDel = () => {

    console.log("vnc001 sendCtrlAltDel() begin ");
    rfb.sendCtrlAltDel();
    console.log("vnc001 sendCtrlAltDel() end ");
    //return false
};

let connectVnc = () => {
    let PASSWORD = '123456'; //VNC Server 密码
    let url = 'WS:/ /192.168. 202.89:4488/ websockify/ ?token=vm3';
    rfb = new RFB(document.getElementById('screen'), url, {
        //向vnc传递的一-些参数，比如说虚拟机的开机密码等
        credentials: { password: PASSWORD },
    });
    rfb.addEventListener(' connect', connectedToServer);
    rfb.addEventListener(' disconnect', disconnectedFromServer);
    rfb.scaleViewport = false;
    //scaleViewport指示是否应在本地扩展远程会话以使其适合其容器。禁用时，如果远程会话小于其容器，则它将居中，或者根据clipViewport它是否更大来处理
    rfb.resizeSession = false;
    //是一个boolean指示是否每当容器改变尺寸应被发送到调整远程会话的请求。默认情况下禁用
    console.log(rfb);
};
let status = (text: string) => {
    console.log(text)
    // document.getElementById('status').textContent = text;
};
let connectedToServer = (e: any) => {
    status('Connected t(desktopName')
    console.log('success', e);
};

let disconnectedFromServer = (e: any) => {
    if (e.detail.clean) {
        status('Disconnected')
        console.log('clean', e.detail.clean);
        //根据断开信息的msg. detail.clean来判断是否可以重新连接
        connectVnc();
    } else {
        status(' Something went wrong，connection is closed');
        console.log('链接失败,重新链接中-------’+ url')
        connectVnc();
    }
};
</script>


<style scoped>
.page-home {
    width: 100%;
    height: 800px;
    margin: 0;
    background-color: dimgrey;
    display: flex;
    flex-direction: column;
}

#top_bar {
    background-color: #6e84a3;
    color: white;
    font: bold 12px Helvetica;
    padding: 6px 5px 4px 5px;
    border-bottom: 1px outset;
}

#status {
    text-align: center;
}

#sendCtrlAltDelButton {
    position: fixed;
    top: 0px;
    right: 0px;
    border: 1px outset;
    padding: 5px 5px 4px 5px;
    cursor: pointer;
}

#screen {
    flex: 1;
    /* fill remaining space */
    overflow: hidden;
}
</style>
