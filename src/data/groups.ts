export interface NavGroup {
  id: string;
  stepNumber: number;
  title: string;
  flavour: 'all' | 'A' | 'AB' | 'B' | 'C';
  howToRead: {
    title: string;
    body: string;
    cueWords?: string[];
  };
}

export const NAV_GROUPS: NavGroup[] = [
  {
    id: 'limits',
    stepNumber: 1,
    title: 'Limits',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: walking toward a point on the graph',
      body: 'Imagine walking along a curve toward $x = a$ from both the left and the right. A <strong>limit</strong> only asks: <em>what height $y$ are your feet heading toward as you get right next to $x = a$?</em> It does not care what happens at the exact spot $x = a$ itself—there can be a hole or a displaced dot and the limit stays the same. A function is <strong>continuous</strong> at $x = a$ when there is no surprise: the left path, the right path, and the dot $f(a)$ all meet at the exact same height.',
      cueWords: [
        '<strong>"Evaluate $\\lim_{x \\to a} f(x)$"</strong> → trace the curve from both sides of $a$. If both sides head to the same height, that number is your answer. If they head to different heights, say "does not exist (DNE)."',
        '<strong>"$x \\to a^-$ vs. $x \\to a^+$"</strong> → $a^-$ means walk in from the left only (numbers slightly smaller than $a$, like $2.99$ for $3^-$); $a^+$ means walk in from the right only (like $3.01$ for $3^+$).',
        '<strong>"Find $k$ so that $f$ is continuous"</strong> → plug the seam point into the left formula and the right formula, then set the two results equal so the pieces connect without a jump.',
        '<strong>"Horizontal vs. vertical asymptote"</strong> → a horizontal asymptote is the height the graph flattens out to far to the left or right ($x \\to \\pm\\infty$); a vertical asymptote is an $x$-value where the graph shoots straight up or down to $\\pm\\infty$ (usually where a denominator hits $0$).'
      ]
    }
  },
  {
    id: 'slopes-and-derivative',
    stepNumber: 2,
    title: 'Slopes and the derivative',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: zooming in until a curve looks straight',
      body: 'If you drive $100\\text{ km}$ in $2\\text{ hours}$, your <strong>average rate of change</strong> (secant slope) is $50\\text{ km/h}$ between start and finish. Your <strong>derivative</strong> $f\'(a)$ (tangent slope) is what your speedometer reads at one exact second: how fast the output $y$ is changing per $1$-unit nudge in $x$ right at $x = a$. Graphically, if you zoom in close enough on a smooth curve, it looks like a straight line—and $f\'(a)$ is the slope of that line.',
      cueWords: [
        '<strong>"Average rate of change / secant slope on $[a, b]$"</strong> → just do old-school rise over run between the two endpoints: $\\dfrac{f(b) - f(a)}{b - a}$.',
        '<strong>"From the definition of the derivative"</strong> → you <em>must</em> write out and simplify the limit $\\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$. Using shortcut rules here gets $0$ marks on an exam.',
        '<strong>"Differentiable at $x = a$"</strong> → the graph is both connected (no jump or hole) and smooth (no sharp corner or vertical cliff) at $x = a$.',
        '<strong>"Interpret $f\'(a) = b$ in plain words"</strong> → use this template: <em>"When [input] is $a$, the [output] is increasing (or decreasing, if $b < 0$) at a rate of $|b|$ [output units] per [input unit]."</em>'
      ]
    }
  },
  {
    id: 'computing-derivatives',
    stepNumber: 3,
    title: 'Computing derivatives',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: spotting the outer shape before you start',
      body: 'Shortcut rules let you find slopes without doing a limit every time. Before you write anything down, zoom out and ask how the formula is glued together: are two things multiplied (<strong>product rule</strong>), divided (<strong>quotient rule</strong>), or stuffed one inside another like Russian dolls (<strong>chain rule</strong>)? When you differentiate nested layers, peel from the outside in—differentiate the outer wrapper first while leaving the inside untouched, then multiply by the derivative of the inside.',
      cueWords: [
        '<strong>"Equation of the tangent line at $x = a$"</strong> → you only need two numbers: the height $y_0 = f(a)$ and the slope $m = f\'(a)$. Drop them straight into $y = y_0 + m(x - a)$.',
        '<strong>"Where is the tangent line horizontal?"</strong> → flat lines have slope $0$, so set $f\'(x) = 0$ and solve for $x$.',
        '<strong>"Variable in both the base and the power (like $x^x$)"</strong> → take $\\ln$ of both sides first (or rewrite as $e^{\\text{power} \\cdot \\ln(\\text{base})}$) so the messy exponent drops down in front.',
        '<strong>"$x$ and $y$ mixed together in an equation (implicit)"</strong> → differentiate both sides with respect to $x$, tacking on a $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$ (chain rule!) every time you differentiate a $y$ term, then solve for $\\dfrac{\\mathrm{d}y}{\\mathrm{d}x}$.'
      ]
    }
  },
  {
    id: 'related-rates',
    stepNumber: 4,
    title: 'Related rates',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: a moving movie vs. a single freeze-frame',
      body: 'Picture a balloon inflating or a ladder sliding down a wall: two or more measurements (like radius and volume) are changing at the same time, and they are locked together by a geometry formula. <strong>The golden rule:</strong> write the geometry equation that holds while everything is moving, differentiate with respect to time $t$ <em>first</em>, and only plug in the "at the instant when..." snapshot numbers <em>after</em> derivatives appear. If you plug in a changing number too early, its derivative turns into $0$ and kills the problem.',
      cueWords: [
        '<strong>"How fast / at what rate is ___ changing?"</strong> → this tells you which rate $\\dfrac{\\mathrm{d}(\\text{something})}{\\mathrm{d}t}$ is your goal.',
        '<strong>"At the instant when the radius is $5$..."</strong> → save this snapshot number for the very end, <em>after</em> you differentiate with respect to $t$.',
        '<strong>"Shrinking / leaking / getting closer at rate $3$"</strong> → if a distance or amount is getting smaller, write its rate with a minus sign ($-3$).',
        '<strong>"Include units"</strong> → just write (units of the quantity) divided by (units of time), like $\\text{cm}^3/\\text{s}$ for volume or $\\text{rad/min}$ for an angle.'
      ]
    }
  },
  {
    id: 'lhopital',
    stepNumber: 5,
    title: "L'Hôpital",
    flavour: 'all',
    howToRead: {
      title: 'The intuition: settling a tug-of-war by comparing speeds',
      body: "When plugging in your target $x$ gives $\\dfrac{0}{0}$ or $\\dfrac{\\infty}{\\infty}$, the top and bottom of the fraction are in a tug-of-war. L'Hôpital's rule says: <em>instead of comparing the heights of the top and bottom, compare how fast they are moving</em>—take the derivative of the top and the derivative of the bottom separately, then take the limit again. <strong>Watch out:</strong> always plug in first! If the fraction is not $\\dfrac{0}{0}$ or $\\dfrac{\\pm\\infty}{\\pm\\infty}$ (for example, $\\dfrac{5}{0}$ or $\\dfrac{0}{3}$), L'Hôpital's rule is illegal and will give a wrong answer.",
      cueWords: [
        '<strong>"Fraction gives $0/0$ or $\\infty/\\infty$"</strong> → differentiate the numerator and denominator separately (do <em>not</em> use the quotient rule!), then re-evaluate the limit.',
        '<strong>"Product gives $0 \\cdot \\infty$"</strong> → flip one factor into the denominator (like turning $f \\cdot g$ into $\\dfrac{f}{1/g}$) so it becomes a $\\dfrac{0}{0}$ or $\\dfrac{\\infty}{\\infty}$ fraction.',
        '<strong>"Weird power like $1^\\infty$, $0^0$, or $\\infty^0$"</strong> → take the natural log first (or rewrite $f(x)^{g(x)}$ as $e^{g(x)\\ln f(x)}$), find the limit of the exponent $g(x)\\ln f(x)$, and put $e$ to that power at the end.'
      ]
    }
  },
  {
    id: 'curve-sketching',
    stepNumber: 6,
    title: 'Curve sketching',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: height, slope, and bend',
      body: "Three formulas tell you the entire story of a graph at any point $x$: <strong>1.</strong> $f(x)$ is the <strong>height</strong> of the curve. <strong>2.</strong> $f'(x)$ is the <strong>slope</strong>—when $f'(x) > 0$ the curve climbs uphill; when $f'(x) < 0$ it goes downhill. <strong>3.</strong> $f''(x)$ is the <strong>bend (concavity)</strong>—when $f''(x) > 0$ the slope is turning upward like a smiley cup $\\cup$ (holds water); when $f''(x) < 0$ it bends downward like a frowny cap $\\cap$ (spills water). Always double-check whether a picture in the problem shows $f(x)$ itself or its derivative $f'(x)$!",
      cueWords: [
        '<strong>"Where is $f$ increasing or decreasing?"</strong> → find where $f\'(x) = 0$ or is undefined, make a sign line for $f\'(x)$, and check where $f\'(x)$ is $+$ (increasing) vs. $-$ (decreasing).',
        '<strong>"Where is $f$ concave up or concave down?"</strong> → make a sign line for the second derivative $f\'\'(x)$: $+$ means concave up ($\\cup$), $-$ means concave down ($\\cap$).',
        '<strong>"Inflection point"</strong> → a point where the graph switches from $\\cup$ to $\\cap$ (or vice versa). $f\'\'(x)$ must actually <em>change sign</em> across the point—just equalling $0$ is not enough!',
        '<strong>"Even vs. odd symmetry"</strong> → plug in $-x$: if $f(-x) = f(x)$, the left side mirrors the right side across the $y$-axis (even, like $x^2$ or $\\cos x$); if $f(-x) = -f(x)$, it flips upside-down across the origin (odd, like $x^3$ or $\\sin x$).'
      ]
    }
  },
  {
    id: 'optimization',
    stepNumber: 7,
    title: 'Optimization',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: finding the highest peak or lowest valley',
      body: 'The highest and lowest points on a graph can only hide in three places: <strong>1.</strong> flat peaks or valleys where the slope is zero ($f\'(x) = 0$, called <em>critical points</em>), <strong>2.</strong> sharp corners where the slope is undefined (<em>singular points</em>), or <strong>3.</strong> the very ends of the allowed interval (<em>endpoints</em>). In word problems, you always have two sentences to hunt for: the <strong>goal</strong> (what you want to make as big or small as possible) and the <strong>constraint</strong> (the fixed budget, fencing, or volume that lets you get rid of extra variables).',
      cueWords: [
        '<strong>"Critical point vs. singular point"</strong> → both must be inside the domain of $f$: a critical point has a flat tangent ($f\'(c) = 0$); a singular point has a broken derivative ($f\'(c)$ does not exist, like a sharp corner).',
        '<strong>"Global (absolute) max/min on a closed interval $[a, b]$"</strong> → make a simple table, plug your critical points, singular points, and both endpoints $a$ and $b$ into the original $f(x)$, and pick the biggest and smallest outputs.',
        '<strong>"Maximize area / minimize cost / closest point"</strong> → write a formula for that target quantity first, then use the given fixed number (the constraint) to substitute out a second variable so only one variable remains.'
      ]
    }
  },
  {
    id: 'taylor-polynomials',
    stepNumber: 8,
    title: 'Taylor polynomials',
    flavour: 'all',
    howToRead: {
      title: 'The intuition: building a polynomial twin at a home-base point',
      body: 'Complicated functions like $e^x$, $\\sin x$, or $\\ln x$ are hard to compute by hand, while polynomials are easy. A <strong>Taylor polynomial</strong> centered at an easy "home-base" point $x = a$ builds a polynomial twin that matches the original function\'s height $f(a)$, slope $f\'(a)$, bend $f\'\'(a)$, and higher derivatives right at $x = a$. A degree-$1$ Taylor polynomial is just the tangent line; adding a degree-$2$ term bends the line into a parabola that hugs the curve even longer.',
      cueWords: [
        '<strong>"Linear ($T_1$), quadratic ($T_2$), or degree-$n$ ($T_n$) Taylor polynomial about $x = a$"</strong> → compute $f(a), f\'(a), \\dots, f^{(n)}(a)$ at the anchor $a$ and plug into $T_n(x) = \\sum_{k=0}^n \\dfrac{f^{(k)}(a)}{k!}(x - a)^k$. ("Maclaurin" just means the home base is $a = 0$.)',
        '<strong>"Given a Taylor polynomial, find $f^{(k)}(a)$"</strong> → do not differentiate the whole polynomial! Just look at the number sitting in front of $(x - a)^k$: that coefficient equals $\\dfrac{f^{(k)}(a)}{k!}$, so multiply it by $k!$.',
        '<strong>"Estimate a number (like $\\sqrt{102}$ or $e^{0.1}$) without a calculator"</strong> → pick the nearest clean home base $a$ you know by heart (like $a = 100$ for $\\sqrt{x}$ or $a = 0$ for $e^x$), build the Taylor polynomial at $a$, and plug in the target $x$.',
        '<strong>"Bound the error $|R_n(x)|$" (Flavour A)</strong> → use the next term in the pattern, $\\left|\\dfrac{f^{(n+1)}(c)}{(n+1)!}(x - a)^{n+1}\\right|$, and replace $|f^{(n+1)}(c)|$ with the largest value it can possibly reach between $a$ and $x$.'
      ]
    }
  },
  {
    id: 'newtons-method',
    stepNumber: 9,
    title: "Newton's method",
    flavour: 'AB',
    howToRead: {
      title: 'The intuition: sliding down the tangent line to find where $f(x) = 0$',
      body: "Suppose you want to solve an equation that algebra cannot crack, by finding where a graph crosses the $x$-axis ($f(x) = 0$). Newton's method starts at a reasonable guess $x_0$, draws the tangent line to the curve at $x_0$, and rides that tangent line straight to where it hits the $x$-axis. That landing spot becomes your much better next guess: $x_{n+1} = x_n - \\dfrac{f(x_n)}{f'(x_n)}$.",
      cueWords: [
        '<strong>"Find $x_1$ (or $x_2$) starting from $x_0$"</strong> → plug $x_0$ into $x_1 = x_0 - \\dfrac{f(x_0)}{f\'(x_0)}$. If asked for $x_2$, repeat the exact same formula using $x_1$.',
        '<strong>"Solve $g(x) = h(x)$ or approximate $\\sqrt[3]{7}$"</strong> → Newton\'s method only finds zeros! First move everything to one side so your function equals zero: $f(x) = g(x) - h(x) = 0$ (or $f(x) = x^3 - 7 = 0$).',
        '<strong>"Approximate a critical point of $g(x)$"</strong> → a critical point is where $g\'(x) = 0$, so apply Newton\'s method to the derivative function $f(x) = g\'(x)$ (which uses $g\'\'(x)$ in the bottom of the formula!).',
        '<strong>"Why did Newton\'s method fail?"</strong> → if $f\'(x_n) = 0$, the tangent line is flat and never hits the $x$-axis; if $f\'(x_n)$ is tiny, the tangent line shoots your next guess miles away.'
      ]
    }
  },
  {
    id: 'differential-equations',
    stepNumber: 10,
    title: 'Differential equations',
    flavour: 'AB',
    howToRead: {
      title: 'The intuition: a rule for how fast something grows or shrinks',
      body: 'In normal algebra, you solve for a mystery number $x$. In a <strong>differential equation</strong>, you are given a rule connecting a quantity $y(t)$ to its own speed $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}$ (for example, "a population grows at a rate proportional to its current size"), and your goal is to find the formula $y(t)$ that obeys that rule. Good news: half the time you do not even have to solve from scratch—if the question hands you a formula and asks you to <em>verify</em> it, just take its derivative and show both sides of the equation match!',
      cueWords: [
        '<strong>"Verify / show that $y(t) = \\dots$ is a solution"</strong> → differentiate the given $y(t)$ formula to get $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}$, plug both into the left and right sides of the differential equation, and simplify until both sides match.',
        '<strong>"Initial condition $y(0) = y_0$"</strong> → plug $t = 0$ and $y = y_0$ into your general solution at the end to pin down the mystery constant $C$.',
        '<strong>"Rate is proportional to ___"</strong> → translate "rate of change of $y$" as $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}$ and "proportional to $A$" as $k \\cdot A$.',
        '<strong>"Steady state / equilibrium"</strong> → a value of $y$ where nothing changes anymore ($\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = 0$). Set the rate formula equal to $0$ and solve for $y$.'
      ]
    }
  },
  {
    id: 'slope-fields',
    stepNumber: 11,
    title: 'Slope fields',
    flavour: 'AB',
    howToRead: {
      title: 'The intuition: following the current in a river',
      body: 'Even when a differential equation $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = f(t, y)$ is too hard to solve with algebra, you can still see what every solution looks like! A <strong>slope field</strong> plugs a grid of points $(t, y)$ into $f(t, y)$ and draws a tiny dash with that exact slope at each point. Think of those dashes as arrows showing the current of a river: drop a leaf at your starting point $(t_0, y_0)$ and trace where the current carries it.',
      cueWords: [
        '<strong>"Match a differential equation to its slope field"</strong> → hunt for where the dashes are completely flat (where $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = 0$), where they tilt uphill ($+$) vs. downhill ($-$), and whether rows or columns all share the same tilt.',
        '<strong>"Sketch the solution passing through $(t_0, y_0)$"</strong> → put a dot at $(t_0, y_0)$ and draw a smooth curve that goes with the flow of the dashes. Never cross a flat horizontal steady-state line!',
        '<strong>"What happens to $y(t)$ as $t \\to \\infty$?"</strong> → follow the current to the right starting from your initial height $y(0)$ and see which horizontal steady-state height it settles into (or if it shoots off to $\\pm\\infty$).'
      ]
    }
  },
  {
    id: 'flavour-b-models',
    stepNumber: 12,
    title: 'Flavour B further models',
    flavour: 'B',
    howToRead: {
      title: 'The intuition: phase lines and push-pull balance in biology',
      body: 'In biological models like $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = f(y)$, the growth rate depends only on how big the population or concentration $y$ is right now. If you graph the rate $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t}$ (vertical axis) against $y$ (horizontal axis), you can read the entire future of the system at a glance: wherever the curve sits <strong>above</strong> the horizontal axis, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} > 0$ so $y$ grows (draw arrows pointing <strong>right</strong> $\\to$); wherever it sits <strong>below</strong> the axis, $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} < 0$ so $y$ shrinks (draw arrows pointing <strong>left</strong> $\\leftarrow$).',
      cueWords: [
        '<strong>"Stable vs. unstable steady state"</strong> → steady states are the $y$-intercepts where $\\dfrac{\\mathrm{d}y}{\\mathrm{d}t} = 0$. If the arrows on both sides point <em>inward</em> toward the dot ($\\to \\bullet \\leftarrow$), it is <strong>stable</strong> (a magnet); if they point <em>away</em> ($\\leftarrow \\circ \\to$), it is <strong>unstable</strong>.',
        '<strong>"What does each term in the equation mean biologically?"</strong> → a $+$ term adds individuals or chemical (birth, inflow, production); a $-$ term removes them (death, washout, breakdown). A product like $x \\cdot y$ means two things must bump into each other to react.',
        '<strong>"Use a conservation law to eliminate a variable"</strong> → if total molecules $y_1 + y_2 = P$ stay constant, replace $y_2$ with $P - y_1$ so two tangled equations simplify into one!'
      ]
    }
  },
  {
    id: 'flavour-c-multivariable',
    stepNumber: 13,
    title: 'Flavour C: multivariable calculus',
    flavour: 'C',
    howToRead: {
      title: 'The intuition: hiking on a 3D landscape $z = f(x, y)$',
      body: 'Picture $z = f(x, y)$ as the elevation $z$ of a mountain above a map with East-West coordinate $x$ and North-South coordinate $y$. A <strong>partial derivative</strong> $f_x$ simply asks: <em>if I freeze $y$ (walk purely East) and take a tiny step in $x$, how steep is the hill?</em> Because $y$ is frozen, you treat $y$ like a plain number (such as $5$) while differentiating with respect to $x$. Peaks and valleys happen where the ground is flat in <em>both</em> directions at once ($f_x = 0$ and $f_y = 0$).',
      cueWords: [
        '<strong>"Find $f_x$ (or $\\partial f / \\partial x$)"</strong> → pretend every $y$ in the formula is a constant number and differentiate normally with respect to $x$. (Do the reverse for $f_y$.)',
        '<strong>"Interpret $f_x(a, b) = c$ in context"</strong> → when $x = a$ and $y$ is held fixed at $b$, increasing $x$ by $1$ unit changes the output by roughly $c$ units.',
        '<strong>"Find and classify critical points"</strong> → solve $f_x = 0$ and $f_y = 0$ together, then plug each point into $D = f_{xx}f_{yy} - (f_{xy})^2$: if $D > 0$ and $f_{xx} < 0$ it is a peak (local max); if $D > 0$ and $f_{xx} > 0$ it is a bowl (local min); if $D < 0$ it is a mountain pass (saddle point).',
        '<strong>"Absolute max/min on a closed shape (like a rectangle or disk)"</strong> → check the flat spots inside the shape <em>and</em> walk along the outer boundary edges/corners, then compare all the heights $f(x, y)$.',
        '<strong>"Optimize $f(x, y)$ subject to a constraint $g(x, y) = k$"</strong> → use Lagrange multipliers: solve $f_x = \\lambda g_x$, $f_y = \\lambda g_y$, and $g(x, y) = k$ together (usually by eliminating $\\lambda$ first).'
      ]
    }
  }
];

export function getGroupById(id: string): NavGroup {
  const found = NAV_GROUPS.find((g) => g.id === id);
  if (!found) {
    throw new Error(`Unknown navigation group id: ${id}`);
  }
  return found;
}
