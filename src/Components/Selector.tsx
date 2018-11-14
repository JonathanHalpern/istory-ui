import * as React from 'react';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

interface Props {
  name: string,
  title: string,
  list: string[],
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
        list.map(value => <MenuItem value={value} key={value}>{value}</MenuItem>)
      }
    </Select>
  </FormControl>
));