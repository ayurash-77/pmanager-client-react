import React from 'react';
import styled from 'styled-components';
// import { Clapper } from '../../../assets/thumbnails/thumbnails'
import Loader from '../Loader';

const color = p => {
  switch (p.variant) {
    case 'blue-light':
      return 'var(--blue-light)';
    case 'accent':
      return 'var(--accent)';
    default:
      return '';
  }
};

const Input = styled.input`
  margin-top: 1px;
  margin-bottom: 1px;
  color: ${color};
  ${p => p.gridColumn && 'grid-column: '} ${p => p.gridColumn};
  ${p => p.width && 'width:'} ${p => p.width};
  //transition: 200ms;
  &[type='date'] {
    text-transform: uppercase;
    padding-right: 3px;
    &::-webkit-calendar-picker-indicator {
      font-size: var(--font-size-small1);
      margin-left: -17px;
      padding: 0;
    }
  }
`;

const Select = styled.select`
  option {
    -webkit-appearance: none;
    appearance: none;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  min-width: 100%;
  min-height: 40px;
`;

export const Label = styled.label`
  color: var(--text-fg-low);
  font-size: var(--font-size-normal);
  child-align: right;
  white-space: nowrap;
  user-select: none;
  &:after {
    content: ':';
  }
`;

const ProjectPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${p => p?.width && '100%'};
  height: 90px;
  position: relative;

  border-radius: 4px;
  overflow: hidden;
  background: var(--bg-project-dummy2);
  //background-image: url(${p => p.image});

  color: var(--table1-header);
  //opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    //background: transparent;
  }

  .progress {
    height: 100%;
    width: 100%;
  }

  .link {
    position: absolute;
    transition: all 150ms;
    color: var(--text-fg-mid);
    font-size: var(--font-size-small1);
    background: var(--navbar-bg);
    border-radius: 20px;
    padding: 6px 10px;
    opacity: 0.9;
  }
  .link:hover {
    color: var(--navbar-fg-hover);
    cursor: pointer;
  }
`;

export const InputPic = ({
  image, loading, onClick, onLoad, uploading,
}) => (
  <>
    <ProjectPicContainer image={image && image.path}>
      {uploading || loading ? (
        <>
          {image && (
          <img
            src={image.path}
            alt={image.name}
            onLoad={onLoad}
          />
          )}
          <Loader />
        </>
      ) : (
        <>
          {image && (
          <img
            src={image.path}
            alt={image.name}
            onLoad={onLoad}
          />
          )}
          <span onClick={onClick} className="link" role="presentation">
            Browse image
          </span>
        </>
      )}
    </ProjectPicContainer>
  </>
);

export const InputText = ({
  autoFocus, gridColumn, label, onChange, placeholder, value, width,
}) => {
  const id = `input-${Math.random()}`;

  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        type="text"
        onChange={onChange}
        value={value}
        autoFocus={autoFocus}
        placeholder={placeholder}
        width={width}
        gridColumn={gridColumn}
      />
    </>
  );
};

export const InputPass = ({
  autoFocus, label, onChange, value,
}) => {
  const id = `input-${Math.random()}`;

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type="password" onChange={onChange} value={value} autoFocus={autoFocus} />
    </>
  );
};

export const InputTextarea = ({
  autoFocus, label, onChange, value,
}) => {
  const id = `input-${Math.random()}`;

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} onChange={onChange} value={value} autoFocus={autoFocus} />
    </>
  );
};

export const InputDate = ({
  autoFocus, label, onChange, value, variant,
}) => {
  const id = `input-${Math.random()}`;

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="date"
        onChange={onChange}
        value={value}
        variant={variant}
        autoFocus={autoFocus}
      />
    </>
  );
};

export const InputSelect = ({
  options, label, onChange, autoFocus, value,
}) => {
  const id = `input-${Math.random()}`;
  const optionsJsx = options.map((item, index) => (
    <option
      key={index}
      value={item.value}
      label={item.label}
    />
  ));

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} onChange={onChange} autoFocus={autoFocus} value={value}>
        {optionsJsx}
      </Select>
    </>
  );
};
