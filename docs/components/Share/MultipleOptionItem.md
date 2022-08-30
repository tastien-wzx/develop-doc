# MultipleOptionItem 表单项+输入框

可以切换输入框key的表单项

## 何时使用
- 

## 代码演示

```js
import MultipleOptionItem from '@/components/Share/MultipleOptionItem/OtherMultiple';

const onFinish = (values: any) => {
    const params = {
      [values.searchType]: values.keyword,
    };
};

const App: React.FC = () => {
  return (
    <Form
      form={menuFilterForm}
      layout="inline"
      initialValues={{ searchType: 'name' }}
      onFinish={onFinish}
    >
      <MultipleOptionItem
        options={[
          { name: '商品名称', value: 'name' },
          { name: '商品ID', value: 'id' },
        ]}
        inputItemName="keyword"
        optionItemName="searchType"
        label="商品信息"
        inputStyle={{ maxWidth: 300 }}
        selectProps={{ style: { minWidth: '10em' } }}
        maxLength={40}
      />
    </Form>
  )
}
```
## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 切换输入框key配置数据 | { value: unknown; name: string }[] | - |
| inputItemName | 字段值，在获取输入框的值的时候使用，如：`[values.searchType]: values.keyword`, | string | keyword |
| optionItemName | 字段名，在表单中获取字段名的时候使用，如：`[values.searchType]: values.keyword` | (value: any, option: DefaultOptionType | DefaultOptionType[]) => void | searchType |
