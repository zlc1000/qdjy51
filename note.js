// git 第一天
// 主要做代码托管（进公司第一天就要干的事）
// 版本控制软件：用来记录文件的变化（新增文件、修改文件、删除文件等等操作; 用于团队协作）

// 分类：本地 - 集中化 - 分布式（比较主流，代表性的工具 git）

// 集中化 - SVN 缺点：依赖网络（只记录变化的部分，可以节省磁盘空间）
// 分布式 - Git 优点：在没有网络的状态，依旧可以本地提交（不仅仅是记录变化的部分，把原来的也拷贝了一份，相对来说比较耗磁盘空间 [拿空间换时间]）

// 世界上最流行，最先进的版本控制系统 Git

// 特点：git 所有的操作近乎都是在本地运行的（速度会很快）

// 三个区域：工作区(就是现在处理的地方)    暂存区(刚刚已经把某个功能已经完善了，提交到暂存区)    仓库(将所有的更改全部放到总仓库里面保存 store)

// 三个状态：已修改状态 modified     已暂存状态 staged     已提交状态 committed

// 流程：对文件进行修改 -> 需要进行暂存 -> 总的提交（本地提交，提交到仓库）

// 安装软件：约定，非必要不装系统盘
// 建议：d:/software 这个位置是专门存放安装的软件的路径的
// 建议：d:/develop  workspace 专门开发的目录、资料（不要直接往桌面拖）
// 打开终端的方式有三种：1、git bash 2、windows + r  3、按着 shfit 键，同时鼠标单机右键，选择 prowershell 选项
// cd 你要进入的文件夹路径
// ls 可以列出当前路径下面的所有的文件和文件夹

// 检测git安装的版本：git --version，如果能正常输出版本号就表示安装成功

// 配置用户名和邮箱
// git config --global user.name '你的姓名的拼音'
// git config --global user.email '你的手机号@163.com'  '你的手机号126@com'  'qq.com'

// 检测配置用户名和邮箱是否配置完毕
// git config user.name
// git config user.email
// 运行这两行代码，如果能正常输出之前配置过的用户名和邮箱即代表配置成功

// 全局配置的用户名和邮箱具体配置的位置 C:\Users\用户名\.gitconfig

// 如何查看当前本机用户名

// 查看全局所有的配置项：git config --list --global

// 获取帮助信息：git config -h

// 使用 cls 可以清除之前输入的一些命令

// 获取 git仓库 的两种方式：
// 方式1：可以将本地的某个文件夹转换成 git仓库 （需要执行 git init 命令）
// 方式2：可以直接从远程服务器克隆（拷贝）一份下来

// 注意点：新建的工程名称不要是中文，名称中间不要有空格等特殊字符

// 文件所处的状态：
// 1、未被跟踪 untracked（当前文件还没有被git所管理）  2、未修改 unmodified  3、已修改 modified  4、已暂存 staged

// 查看文件的状态：git status 文件处于什么状态，都能看到
// 精简的命令：git status -s    ?? 标识当前文件处于未被跟踪的状态

// 跟踪新文件：git add 你要跟踪的文件的名称 (可以使用tab键，快速补齐路径)(使用上下左右键的上键，可以快速恢复到上一次输入的命令)

// 提交更新文件：git commit -m '此次提交的记录信息' (-m 后面的提交信息，一定不能丢)

// 对已经添加到暂存区的文件，又进行修改了的话，再次查看文件状态，依然属于已修改状态，需要再次添加到暂存区（需要 git add 文件名称）

/**
 * add 命令的作用：
 * 1、将未被跟踪的文件，添加到暂存区
 * 2、将已经处于跟踪的文件又做了修改的情况下，再次添加到暂存区
 * 3、将冲突文件解决完之后，需要再次将文件状态标识为已解决，添加到暂存区
 */

/**
 * 回顾git命令第一天的前半天
 *
 * git init - 在本地初始化一个 git 仓库（会生成一个 .git 的隐藏文件）
 * git add 你要添加的文件 - 把文件放到到暂存区里面
 * git commit -m '提交的描述信息' - 提交更新文件
 *
 * 查看文件状态：git status
 */

// 撤销对文件的修改：git checkout -- 你要撤销的文件.后缀名   （使用率不高，当了解）

// （非常常用）一次性添加多个文件到暂存区：git add .

// 取消文件之前添加到暂存区的状态：git reset HEAD 文件的名称    （使用率不高，当了解）
// (只有处于还未提交的状态，才能撤回到未跟踪状态)

// （非常常用）跳过暂存区：git commit -a -m '描述消息'

// 移除文件：git rm -f 你要删除的文件（仓库和本地都没了）[慎用]
//         git rm --cached 你要删除的文件（仓库中没了，但是本地还保留着）[用的不多]

// 忽略文件：就是可以将不需要被git所管理的文件，剔出去（.gitignore）名字必须这么写
// 采用正则匹配不需要管理的文件
// 注意：你要忽略的文件，不能是已经放到暂存区的

// 查看历史提交记录：git log
// quit 表示退出的意思  :q

// 可以回退到指定版本（对应的代码） git reset --hard 提交的id（唯一标识）

// git init
// git add 文件名称 / git add .
// git commit -m '描述信息一定要简洁'
// 上两句话等价于：git commit -a -m '描述信息'（条件：是要确保当前文件已经在暂存区里面了）

// git 第二天
// 开源和闭源（作商用）的概念
// 开源协议：MIT 要求少很多（基本上没有要求）
// 核心思想：我为人人，人人为我（jquery 开源项目，nodejs）

// 开源托管平台：
// github 特点：访问很慢 全世界的开发喜欢在这里去交流（全球最大的同性交友网站）
// gitlab 特点：企业里面都喜欢用（每个公司基本上都会部署一套托管平台）（需要用内网访问）
// gitee  特点：是国内的托管平台，访问很慢（可以做学习用）

// Watch 跟踪的意思
// Star 点赞的数量（单位：k -> 1000）
// Fork 复制一份到自己的仓库里面去（想根据这个项目，自己另外加点东西）

// Code 就是次工程的代码列表
// Sponsor 表示可以赞助一杯瑞幸

// 先去注册一个账号

// 新建远程仓库：New Repository

// mkdir qdjy51  - 表示创建一个叫 qdjy51 这个名字的文件夹
// cd qdjy51  - 表示进入到后面叫这个名字的文件夹里面去
// touch README.md  - 表示创建一个名字叫 README.md 文件

// 链接远程仓库的两种方式：https ssh
// https 缺点，每次登录的时候需要输入账号和密码（winds每次对你输入的账号和密码，会自动保存）
// 场景：如果第一次输入账号密码有误，需要去 控制面板\用户帐户\凭据管理器 把原先存储的账号密码删掉，再重新输入账号密码

// ssh：企业里面比较推荐的一种方式，一次配置，终身使用（会有一些配置的步骤）

// echo "# qdjy51" >> README.md   -  新建 README.md 文件的同时写入 "# qdjy51"

// master 比较特殊，受：“Black Lives Matter”，缩写为“BLM”，黑人人权运动，意为“黑人的命也是命” 影响
// 2020年10月1号 把名字改成了 main
// 推荐阅读：https://blog.csdn.net/H176Nhx7/article/details/111350550

// git remote add origin https://github.com/zlc1000/qdjy51.git
//      远程  添加
// origin译为：源; 此处表示一个别名的意思
// 上句命令的意思是：将本地仓库和远程仓库地址进行关联
// 如何查看当前仓库关联的仓库是什么：git remote -v
// 如果你关联的地址不是你想关联的，可以删掉：git remote remove origin

// git push -u origin main
// 添加完远程仓库的关联之后，就要朝仓库进行推送了
// 解释：如果是第一个提交到仓库的话，要写全了：-u 表示是第一次提交 origin 是指明提交到哪个仓库 main 是表示朝这个仓库的哪个房间
// 如果是第二次提交的话，只需要执行：git push 就好了

// https://github.com/settings/keys 路径 generate 表示是生成的意思
// 命令：ssh-keygen -t ed25519 -C "写自己的邮箱"
// 私钥和公钥默认存放的位置：C:\Users\lianchang\.ssh

// 测试一下私钥公钥是否正确（github比较慢，请去 gitee 码云）

// 测试：ssh -T git@github.com   /    ssh -T git@gitee.com
// 不行的话，换用热点   换别人的热点

// ssh 公钥配好之后，就可以链接：git remote add origin git@gitxxxx.com
// 新建一个仓库：ssh协议的那个地址

// git clone 你要克隆的仓库地址（注意终端打开的位置，克隆下来的代码，默认在终端执行的位置）
// 克隆：不克隆自己的，克隆同桌的（给https链接 ssh）
// try 向你同桌的仓库里面提交一点东西，试一试
// 新建仓库：public公开（表示其他所有人都可以访问、克隆你的项目; 并不代表其他所有人可以朝的仓库去提交东西） private私有（表示其他人访问不了）
// 处理：你需要邀请团队成员来一起开发项目，内个成员的邮箱会有一份激活邮件

// 0926反馈
// 案例比较多; 面试题
// vue基础已经开放了，本地加载去掉
// 44期，我不是很清楚，可以找咨询老师问一下

/**
 *
 * 获取仓库的两种方式：1、自行初始化 git init    2、通过克隆的方式去拷贝一份 git clone 仓库的地址
 *
 * git init
 * git add .
 * git commit -m '描述信息尽量以简短的辞藻去描述'
 * 再去修改代码
 * git add .
 * git commit -m '再次朝本地仓库提交'
 * 再去修改代码
 * git add .
 * git commit -m '再次朝本地仓库提交'
 * git remote add origin 远程仓库地址 （建议和远程仓库的链接）
 * git push -u origin master （第一次朝仓库提交的时候，需要指定远程仓库的名称和所在分支名称）
 *
 *
 */

// 分支在开发过程的作用 (branch 树杈)
// 每位开发者都会有一个自己的开发的分支（保证成员之间开发的东西互不影响）（feature/你的名字）（合并：各个成员之间可以把所有功能都放到一块去）

// 每个新建好的仓库，默认都会有一个主分支：master  -> github里面用master -> main
// 在码云里面，也是用的 master
// 作用：一般只做保存用，不在此分支开发东西，做合并用（做代码汇集用）

// 功能分支：就是专门用来开发新功能的（每个人都会有一个）（分支名称的命名规范：feature/你的名字）

// 查看所有分支的列表：git branch
// 创建新分支：git branch 分支的名称 (新分支的代码和刚刚创建的那个分支代码是一样)
// 切换分支：git checkout 分支的名称 （要求是：切换分支之前最好把代码提交一下 不停的add commit）
// 快速创建分支和切换动作：git checkout -b 分支的名称

// 合并分支步骤：1、在功能分支中实现编码，编码之后要提交  2、先切回main分支，再合并（git merge user）

// 删除分支：git branch -d 你要删除的分支的名称

// 冲突产生的原因：只要在不同分支上对同一个文件(同一行)都做了操作，一合并，肯定会发生冲突
