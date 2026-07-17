/* @ds-bundle: {"format":4,"namespace":"BeyondTalentDesignSystem_807dbe","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ServiceCard","sourcePath":"components/core/Card.jsx"},{"name":"StatCard","sourcePath":"components/core/Card.jsx"},{"name":"ProfileCard","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"AccentBar","sourcePath":"components/core/Divider.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Input.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"0229b1109bd0","components/core/Button.jsx":"b18c11b5426f","components/core/Card.jsx":"af00d8ca646b","components/core/Divider.jsx":"362b507e4d0d","components/core/Input.jsx":"8109f0279ad6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BeyondTalentDesignSystem_807dbe = window.BeyondTalentDesignSystem_807dbe || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const VARIANTS = {
  'blue-pill': {
    background: '#EBF4FA',
    color: '#1170A1',
    borderRadius: '20px'
  },
  'red-pill': {
    background: '#F6DDE1',
    color: '#AC1225',
    borderRadius: '20px'
  },
  'blue-solid': {
    background: '#1170A1',
    color: '#fff',
    borderRadius: '20px'
  },
  'red-solid': {
    background: '#AC1225',
    color: '#fff',
    borderRadius: '20px'
  },
  'navy-square': {
    background: '#0A4166',
    color: '#fff',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontSize: '11px'
  },
  border: {
    background: 'transparent',
    color: '#6B7A8D',
    borderRadius: '4px',
    border: '1px solid #E2E8EF'
  },
  muted: {
    background: '#F2F5F8',
    color: '#3A4A5C',
    borderRadius: '4px'
  }
};
function Badge({
  variant = 'blue-pill',
  children,
  style
}) {
  const vr = VARIANTS[variant] || VARIANTS['blue-pill'];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '4px 12px',
      fontSize: '12px',
      fontWeight: 600,
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1,
      ...vr,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: {
    padding: '7px 14px',
    fontSize: '12px',
    borderRadius: '4px'
  },
  md: {
    padding: '12px 24px',
    fontSize: '14px',
    borderRadius: '6px'
  },
  lg: {
    padding: '16px 32px',
    fontSize: '16px',
    borderRadius: '8px'
  }
};
const SIZES_OUTLINED = {
  sm: {
    padding: '5px 12px',
    fontSize: '12px',
    borderRadius: '4px'
  },
  md: {
    padding: '10px 22px',
    fontSize: '14px',
    borderRadius: '6px'
  },
  lg: {
    padding: '14px 30px',
    fontSize: '16px',
    borderRadius: '8px'
  }
};
const VARIANTS = {
  primary: {
    background: '#1170A1',
    color: '#fff',
    border: 'none'
  },
  accent: {
    background: '#AC1225',
    color: '#fff',
    border: 'none'
  },
  outlined: {
    background: 'transparent',
    color: '#1170A1',
    border: '2px solid #1170A1'
  },
  'outlined-red': {
    background: 'transparent',
    color: '#AC1225',
    border: '2px solid #AC1225'
  },
  ghost: {
    background: '#F2F5F8',
    color: '#6B7A8D',
    border: 'none'
  },
  dark: {
    background: '#0A4166',
    color: '#fff',
    border: 'none'
  },
  gradient: {
    background: 'linear-gradient(135deg,#1170A1 0%,#0A4166 100%)',
    color: '#fff',
    border: 'none'
  }
};
const HOVER = {
  primary: {
    background: '#0D5A85'
  },
  accent: {
    background: '#8E0E1C'
  },
  outlined: {
    background: '#EBF4FA'
  },
  'outlined-red': {
    background: '#F6DDE1'
  },
  ghost: {
    background: '#E2E8EF'
  },
  dark: {
    background: '#073352'
  },
  gradient: {
    background: 'linear-gradient(135deg,#0D5A85 0%,#073352 100%)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  style
}) {
  const [hovered, setHovered] = useState(false);
  const isOutlined = variant === 'outlined' || variant === 'outlined-red';
  const sz = (isOutlined ? SIZES_OUTLINED : SIZES)[size] || SIZES.md;
  const vr = VARIANTS[variant] || VARIANTS.primary;
  const hv = hovered && !disabled ? HOVER[variant] || {} : {};
  return /*#__PURE__*/React.createElement("button", {
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 600,
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '6px',
      lineHeight: 1,
      letterSpacing: '0.2px',
      transition: 'background 0.15s, opacity 0.15s',
      opacity: disabled ? 0.5 : 1,
      ...sz,
      ...vr,
      ...hv,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '12px',
      padding: '28px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      ...style
    }
  }, children);
}
function ServiceCard({
  icon,
  title,
  description,
  link,
  linkText = 'Learn more →',
  style
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: style
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '44px',
      height: '44px',
      background: '#EBF4FA',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '16px'
    }
  }, icon), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontWeight: 700,
      fontSize: '15px',
      color: '#0D1B2A',
      marginBottom: '8px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '13px',
      color: '#6B7A8D',
      lineHeight: 1.6,
      marginBottom: link ? '16px' : 0
    }
  }, description), link && /*#__PURE__*/React.createElement("a", {
    href: link,
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '13px',
      fontWeight: 600,
      color: '#1170A1',
      textDecoration: 'none'
    }
  }, linkText));
}
function StatCard({
  label,
  value,
  description,
  accent = 'blue',
  style
}) {
  const bg = {
    blue: '#1170A1',
    red: '#AC1225',
    navy: '#0A4166'
  }[accent] || '#1170A1';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: '12px',
      padding: '28px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.6)',
      marginBottom: '12px'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Anton',sans-serif",
      fontSize: '52px',
      color: '#fff',
      lineHeight: 1,
      marginBottom: '6px'
    }
  }, value), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '13px',
      color: 'rgba(255,255,255,0.7)'
    }
  }, description));
}
function ProfileCard({
  initials,
  name,
  role,
  bio,
  tags = [],
  style
}) {
  return /*#__PURE__*/React.createElement(Card, {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      background: 'linear-gradient(135deg,#1170A1,#0A4166)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Anton',sans-serif",
      fontSize: '18px',
      color: '#fff'
    }
  }, initials)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontWeight: 700,
      fontSize: '14px',
      color: '#0D1B2A'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '12px',
      color: '#6B7A8D'
    }
  }, role))), bio && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '13px',
      color: '#6B7A8D',
      lineHeight: 1.6,
      marginBottom: tags.length ? '14px' : 0
    }
  }, bio), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "'Inter',sans-serif",
      background: i % 2 === 0 ? '#EBF4FA' : '#F6DDE1',
      color: i % 2 === 0 ? '#1170A1' : '#AC1225',
      borderRadius: '20px',
      padding: '3px 10px',
      fontSize: '11px',
      fontWeight: 600
    }
  }, t))));
}
Object.assign(__ds_scope, { Card, ServiceCard, StatCard, ProfileCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  variant = 'line',
  style
}) {
  const variants = {
    line: {
      height: '1px',
      background: '#E2E8EF'
    },
    blue: {
      height: '2px',
      background: '#1170A1'
    },
    gradient: {
      height: '3px',
      background: 'linear-gradient(90deg,#1170A1 0%,#AC1225 100%)',
      borderRadius: '2px'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...(variants[variant] || variants.line),
      ...style
    }
  });
}
function AccentBar({
  color = 'blue',
  children,
  style
}) {
  const barColor = color === 'red' ? '#AC1225' : '#1170A1';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: '12px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '4px',
      background: barColor,
      borderRadius: '2px',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Divider, AccentBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  style
}) {
  const [focused, setFocused] = useState(false);
  const borderColor = error ? '#AC1225' : focused ? '#1170A1' : '#E2E8EF';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '12px',
      fontWeight: 600,
      color: error ? '#AC1225' : '#3A4A5C'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '10px 14px',
      border: `1.5px solid ${borderColor}`,
      borderRadius: '6px',
      fontFamily: "'Inter',sans-serif",
      fontSize: '14px',
      color: '#0D1B2A',
      background: disabled ? '#F2F5F8' : error ? '#FEF9FA' : '#fff',
      outline: 'none',
      transition: 'border-color 0.15s',
      cursor: disabled ? 'not-allowed' : 'text',
      opacity: disabled ? 0.65 : 1
    }
  }), error && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '11px',
      color: '#AC1225'
    }
  }, error));
}
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
  style
}) {
  const [focused, setFocused] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "'Inter',sans-serif",
      fontSize: '12px',
      fontWeight: 600,
      color: '#3A4A5C'
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      padding: '10px 14px',
      border: `1.5px solid ${focused ? '#1170A1' : '#E2E8EF'}`,
      borderRadius: '6px',
      fontFamily: "'Inter',sans-serif",
      fontSize: '14px',
      color: '#0D1B2A',
      background: disabled ? '#F2F5F8' : '#fff',
      outline: 'none',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'border-color 0.15s'
    }
  }, options.map((opt, i) => {
    const val = typeof opt === 'object' ? opt.value : opt;
    const lbl = typeof opt === 'object' ? opt.label : opt;
    return /*#__PURE__*/React.createElement("option", {
      key: i,
      value: val
    }, lbl);
  })));
}
Object.assign(__ds_scope, { Input, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.ProfileCard = __ds_scope.ProfileCard;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.AccentBar = __ds_scope.AccentBar;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
