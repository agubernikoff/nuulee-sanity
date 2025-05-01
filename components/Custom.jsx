import React from 'react'
import {set, unset, setIfMissing} from 'sanity'

export function Custom({value = {}, onChange}) {
  const sizes = ['xs', 's', 'm', 'l', 'xl']
  const fields = ['chest', 'waist', 'hip']

  const handleChange = (size, field, val) => {
    const path = [size, field]
    onChange([setIfMissing({}), val ? set(val, path) : unset(path)])
  }

  return (
    <table style={{borderCollapse: 'collapse', width: '100%'}}>
      <thead>
        <tr>
          <th>Size</th>
          {fields.map((field) => (
            <th key={field}>{field.charAt(0).toUpperCase() + field.slice(1)} (in)</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sizes.map((size) => (
          <tr key={size}>
            <td>
              <strong>{size.toUpperCase()}</strong>
            </td>
            {fields.map((field) => (
              <td key={field}>
                <input
                  type="text"
                  value={value?.[size]?.[field] || ''}
                  onChange={(e) => handleChange(size, field, e.target.value)}
                  style={{width: '100%'}}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
