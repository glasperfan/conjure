/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 */

package com.palantir.conjure.defs.services;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import com.google.common.base.Preconditions;
import com.palantir.conjure.defs.ConjureImmutablesStyle;
import java.util.regex.Pattern;
import org.immutables.value.Value;

/**
 * Represents the name of an argument in an {@link EndpointDefinition}.
 */
@Value.Immutable
@ConjureImmutablesStyle
public abstract class ParameterName {

    private static final Pattern PATTERN = Pattern.compile("^[a-z][a-z0-9]*([A-Z0-9][a-z0-9]+)*$");

    @JsonValue
    public abstract String name();

    @Value.Check
    protected final void check() {
        Preconditions.checkArgument(PATTERN.matcher(name()).matches(), "Parameter names in endpoint paths and service "
                + "definitions must match pattern %s: %s", PATTERN, name());
    }

    @JsonCreator
    public static ParameterName of(String name) {
        return ImmutableParameterName.builder().name(name).build();
    }

    @Override
    public final String toString() {
        return name();
    }
}