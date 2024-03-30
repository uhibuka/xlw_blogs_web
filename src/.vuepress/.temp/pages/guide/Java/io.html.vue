<template><div><details class="hint-container details"><summary>1.BIO</summary>
<p>BIO就是当一个线程发起IO请求时，内核会去查看数据是否准备就绪，如果没有准备就绪就会一直阻塞，直到数据准备就绪。</p>
</details>
<details class="hint-container details"><summary>2.NIO</summary>
<p>在Java中NIO就是多路复用IO。多路复用IO模型中，会有一个线程不断地去询问socket的状态，当socket发出读写请求时，才会有真正的io操作。</p>
<p>NIO的三大核心组件：</p>
<ol>
<li>Buffer（缓冲区）：每个客户端都会对应一个Buffer，通过缓冲区读写数据。</li>
<li>Channel（通道）：每个Channel用于连接Buffer和Selector，可以双向读写，支持异步操作。可以从通道中读取数据到缓冲区，也可以从缓冲区中读取数据到通道。</li>
<li>Selector（选择器）：一个选择器可以连接多个通道，用于监听多个通道的事件，可以监听Channel是否有数据需要读取，有的话就进行相应的操作。</li>
</ol>
</details>
<details class="hint-container details"><summary>3.AIO</summary>
<p>AIO又叫异步IO模型，在AIO中当线程发起读写请求时，只需要发送请求，然后就可以立刻去执行其他的事情，内核收到读写数据的请求之后，会给线程返回一个信息，告诉线程接收到了读写的请求。然后内核等待数据就绪，数据就绪之后，内核把数据拷贝到用户线程，并且告诉用户线程操作已经完成，然后线程就可以直接使用数据。</p>
</details>
<details class="hint-container details"><summary>4.NIO、BIO、AIO的使用场景？</summary>
<ol>
<li>NIO适用于连接数比较多但是连接较短的场景，例如聊天服务器，弹幕系统，服务器间的通讯。</li>
<li>BIO适用于连接数目较小且比较固定的架构。</li>
<li>AIO适用于连接数目比较多且连接较长的架构，比如相册服务器。</li>
</ol>
</details>
<details class="hint-container details"><summary>5.Netty和NIO的区别？</summary>
<p>事实上Netty就是基于NIO进行了一系列的优化，本质上也是多路复用IO，只是对NIO的API进行了一系列的封装，使得功能更加强大。Netty的核心组件有以下几个：</p>
<ol>
<li>Channel（通道）：与NIO中的通道类似，也可以双向传输数据。</li>
<li>ChannelHandler（通道处理器）：用于处理通道中的事件和数据，可以实现各种业务逻辑和协议编码。</li>
<li>ChannelPipleline（通道管道）：是一个包含ChannelHandler的链式结构，用于处理通道中的入站和出站事件和数据。</li>
<li>EventLoop（事件循环）：是一个线程或者线程组，用于处理通道中的事件和任务，一个EventLoop可以处理多个通道，但是一个通道只能绑定到一个EventLoop上。</li>
<li>Bootstrap（引导）：一个用于配置和启动客户端或服务器的辅助类，可以设置通道类型，管道，事件循环，选项等。</li>
</ol>
</details>
</div></template>


