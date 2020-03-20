```
■ファイル構成(※spec.tsとscssは省いている)
app.component.html (approot)
app.component.ts (approot)
app.module.ts (approot 設定/管理)

material フォルダ
　┗material.module.ts (angular materialのmodule管理)

app.routing.module.ts (画面遷移用：汎用性を上げるため：todo用は子ルート(todo-routing.module.ts)を使用)

in-memory-data.service.ts (REST API による CRUD 操作をエミュレートするインメモリの Web API )

app-store フォルダ (ngrx関連)
　┣app-store.module.ts
　┗index.ts


todo フォルダ (TODO 関連)
　┣todo-module.ts (設定/管理)
　┣todo-routing.module.ts (画面遷移: rootはpath無、遷移コンポーネントはpath有)
　┣models
　┃　　┗todo.model.ts (interface作成:クラスに必要なものを指定 ※すべてクラスで実装必須)
　┃
　┣services フォルダ
　┃　┗todo.service.ts (Web API設定)
　┃
　┣store フォルダ (ngrx関連)
　┃　┣index.ts
　┃　┣todo-store.module.ts
　┃　┣todo.effects.ts
　┃　┣todo.facede.ts
　┃　┣todo.actions.ts
　┃　┣todo.reducer.ts
　┃　┗todo.selector.ts
　┃
　┣containers\todo フォルダ (todoメイン)
　┃　┣todo.component.html
　┃　┗todo.component.ts
　┃
　┣components フォルダ (todoコンポーネント)
　 　┣todo-form (入力)
　 　┃　┣todo-form.component.html
　 　┃　┗todo-form.component.ts
　 　┃
　 　┣todo-list（リストベース）
　 　┃　┣todo-list.component.html
　 　┃　┗todo-list.component.ts
　 　┃
　 　┣todo-list-item（リスト）
　 　┃　┣todo-list-item.component.html
　 　┃　┗todo-list-item.component.ts
　 　┃
　 　┗todo-dialogいる？(リスト詳細？編集、削除など)
　　　　┣todo-list-item.component.html
　　　　┗todo-list-item.component.ts
```
