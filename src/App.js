import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function App() {
  const [value, setValue] = React.useState('<p>Welcome to CKEditor!</p>');
  if (value === '') {
    throw new Error('I crashed!');
  }

  return (
    <div className='App'>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={InlineEditor}
        data='<p>Hello from CKEditor 5!</p>'
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />

      <CKEditor
        editor={InlineEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
    </div>
  );
}
