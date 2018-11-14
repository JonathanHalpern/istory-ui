import * as React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

interface Element {
  index: number,
  name: string
}

interface List extends Array<Element>{}

interface Props {
    title: string,
    name: string,
    list: List,
    selected: string,
    onChange: (event: any) => void
}

export default React.memo(({title, name, list, selected, onChange }: Props) => (
  <FormControl>
    <InputLabel>{title}</InputLabel>
    <Select
      value={selected}
      onChange={onChange}
      inputProps={{
        name,
        id: name,
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {
        list.map(element => <MenuItem value={element.index} key={element.name}>{element.name}</MenuItem>)
      }
    </Select>
  </FormControl>
));